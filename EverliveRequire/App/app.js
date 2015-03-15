define([
           'config',
           'Everlive',
       ], function (config, Everlive) {
         

           var app = {
               
                      init: function () {
                                 var self = this;
                                 
                                 self.everlive = new Everlive({
                                            apiKey: config.everlive.apiKey,
                                            scheme: config.everlive.scheme
                                 });
                                 
                                 self.mobileApp = new kendo.mobile.Application(document.body, {
                                                                                skin: 'flat'
                                                                            });
                                 
                                 self.everlive.data("Appraisals").get(null, function () {
                                                       alert('success');
                                            }, function () {
                                                       alert('err');
                                            });
                      }
           };
           return app;
       });
