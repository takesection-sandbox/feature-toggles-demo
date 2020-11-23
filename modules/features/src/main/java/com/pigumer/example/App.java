package com.pigumer.example;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestStreamHandler;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class App implements RequestStreamHandler {

    private final ObjectMapper objectMapper;

    public App() {
        objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    }

    private String requestToString(InputStream inputStream) throws IOException {
        try (ByteArrayOutputStream os = new ByteArrayOutputStream()) {
            int c;
            while ((c = inputStream.read()) != -1) {
                os.write(c);
            }
            return new String(os.toByteArray(), StandardCharsets.UTF_8);
        }
    }

    private void headers(Response response) {
        Map<String, String> map = response.getHeaders();
        map.put("Content-Type", "application/json");
        map.put("Access-Control-Allow-Origin", "*");
        map.put("Access-Control-Allow-Methods", "OPTIONS,GET");
        map.put("Access-Control-Allow-Headers", "Content-Type,Authorization");
    }

    private Map<String, String> features(String email) {
        Map<String, String> map = new HashMap<>();

        switch (email) {
            case "demo2@example.com":
                map.put("label1", "stg/label1");
                break;
            case "demo3@example.com":
                map.put("label1", "demo/label1");
                map.put("label2", "demo/label2");
                break;
            default:
                map.put("label1", "prod/label1");
        }
        return map;
    }

    @Override
    public void handleRequest(InputStream inputStream, OutputStream outputStream, Context context) throws IOException {
        String requestString = requestToString(inputStream);
        context.getLogger().log(requestString);

        Request request = objectMapper.readValue(requestString, Request.class);
        Map<String, String> featuresMap = features(request.getRequestContext().getAuthorizer().getClaims().getEmail());

        Response response = new Response();
        response.setStatusCode(200);
        headers(response);
        response.setBody(objectMapper.writeValueAsString(featuresMap));
        objectMapper.writeValue(outputStream, response);
    }
}
