﻿$(document).ready(function () {
    $("#groups").change(function () {
        $("#students").empty();

        var groupId = $("#groups").val();
        $.post("/BTS/GetStudents", { groupId: groupId }, function (data) {
            $.each(data, function (i, data) {
                $("#students").append('<option value="' + data.Value + '">' +
                                    data.Text + '</option>');
            });
        });
    });


    //$("#groups").change(function () {
    //    $("#students").empty();
    //    $.ajax({
    //        type: 'POST',
    //        url: '@Url.Action("GetStudents","BTS")',
    //        data: { groupId: $("#groups").val() },
    //        success: function (students) {
    //            $.each(students, function (i, student) {
    //                $("#students").append('<option value="' + student.Value + '">' +
    //                    student.Text + '</option>');
    //            });
    //        },
    //        error: function () {
    //            alert('Ошибка извлечения списка студентов.');
    //        }
    //    });
    //    return false;
    //});

    _initializeTooltips();
});

function _initializeTooltips() {
    $(".editProjectUserButton").tooltip({ title: "Редактировать участника", placement: 'left' });
    $(".deleteProjectUserButton").tooltip({ title: "Удалить участника", placement: 'left' });
}

$(function () {
    $(".projectPartButton").on('click', function () {
        getAssignUserForm($(this).data('url'));
    });
});

function getAssignUserForm(assignUserFormUrl) {
    $.get(assignUserFormUrl,
            {},
          function (data) {
              showDialog(data);
          });
}

function showDialog(assignUserForm) {
    bootbox.dialog({
        message: assignUserForm,
        title: "Добавить участника проекта",
        buttons: {
            main: {
                label: "Добавить",
                className: "btn-primary btn-submit",
                callback: function () {
                }
            }
        }
    });

    var form = $('#assignUserForm').find('form');
    var sendBtn = $('#assignUserForm').parents().find('.modal-dialog').find('.btn-submit');

    sendBtn.click(function () {
        //if ($(form).valid()) {
        //    form.submit();
        //} else {
        //    return false;
        //}
        form.submit();
    });
}