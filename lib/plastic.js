/**
 * PlasticJS
 */

"use strict";

module.exports = function() {
    var plastic = {
        _providers: [],
        _products: []
    };
    
    
    plastic.use = function(providerid, provider) {
        if(provider == null) {
            provider = providerid;
            providerid = null;
        }
        
        if(provider && provider.pay && provider.subscribe && provider.customer
            && provider.invoice && provider.coupon && provider.plan) {
            var providerobj = new Object();
            if(providerid) providerobj.id = providerid;
            providerobj.provider = provider;
        } else {
            throw new Error("Provider missing required function");
        }
    };
    
    plastic.pay = function(providerid, product) {
        
    };
    
    plastic.subscribe = function() {
        
    };
    
    plastic.customer = function() {
        
    };
    
    plastic.invoice = function() {
        
    };
    
    plastic.coupon = function() {
        
    };
    
    plastic.plan = function() {
        
    };
    
    return plastic;
};