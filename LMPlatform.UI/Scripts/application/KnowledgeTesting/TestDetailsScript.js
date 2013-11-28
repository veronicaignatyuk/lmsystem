﻿var testsDetails = {
    init: function () {
        $('#saveButton').bind('click', $.proxy(this._onSaveButtonClicked, this));
    },

    _webServiceUrl: '/KnowledgeTesting/',
    _saveMethodName: 'SaveTest',
    _getMethodName: 'GetTest',

    formatTitle: function () {
        var title = koWrapper.getModel().Title;
        return "Тест: " + title == "" ? "Новый" : title;
    },

    getTextForTimeLabel: function () {
        return koWrapper.getModel().SetTimeForAllTest
            ? 'Время на весь тест (мин)'
            : 'Время на 1 вопрос(сек)';
    },

    _onSaveButtonClicked: function () {
        var modelToSave = koWrapper.getModel();
        if (this._validate()) {
            this._saveTest(modelToSave);
        }
    },

    _saveTest: function (model) {
        $.ajax({
            url: this._webServiceUrl + this._saveMethodName,
            type: "POST",
            data: JSON.stringify(model),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this._onTestSaved, this)
        });
    },

    _loadTest: function (id) {
        $.ajax({
            url: this._webServiceUrl + this._getMethodName,
            type: "GET",
            data: { id: id },
            dataType: "json",
            success: $.proxy(this._onTestLoaded, this)
        });
    },

    _onTestLoaded: function (testResult) {
        koWrapper.createOrUpdateViewModel(testResult);
        $('#testDetails').modal();
    },
    
    _onTestSaved: function () {
        datatable.fnDraw();
        $('#testDetails').modal('hide');
    },

    _validate: function () {
        return true;
    },

    showDialog: function (id) {
        this._loadTest(id);
    }
};

$(document).ready(function () {
    testsDetails.init();
});