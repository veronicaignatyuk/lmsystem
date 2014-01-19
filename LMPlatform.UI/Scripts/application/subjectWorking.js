﻿var subjectWorking = {
    init: function() {
        var that = this;
        that.initModuleAction();
    },

    initModuleAction: function () {
        $('.moduleLinks').handle("click", function () {
            var that = this;
            $('.conteinerModule').spin('large');
            $.post($(that).attr("href"), null, function (data) {
                $('.conteinerModule').empty();
                $('.conteinerModule').append(data);
                subjectWorking.updateHandlerActions();
            });

        });
        
        $('.navLink').handle("click", function () {
            var that = this;
            var links = $('ul.nav.navbar-nav.side-nav').find('li');
            links.each(function () {
                $(this).removeClass("active");
            });
            $(that).addClass("active");
            return false;
        });
    },
    
    updateHandlerActions: function() {
        $('#addNewsButton').handle("click", function () {
            var that = this;
            $.savingDialog("Создание новости", $(that).attr("href"), null, "primary", function (data) {
                
            });
            return false;
        });
    }
};

$(document).ready(function () {
    subjectWorking.init();
});