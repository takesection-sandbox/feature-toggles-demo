package com.pigumer.example;

public class RequestContext {

    private Authorizer authorizer;

    public Authorizer getAuthorizer() {
        return authorizer;
    }

    public void setAuthorizer(Authorizer authorizer) {
        this.authorizer = authorizer;
    }
}
