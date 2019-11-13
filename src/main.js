import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Triangle } from './triangle';




$(document).ready(function() {

  $('.triangle-form').submit(function(event){
    event.preventDefault();

    var side1t = $('#side1').val();
    var side2t = $('#side2').val();
    var side3t = $('#side3').val();

    var endResult = new Triangle(side1t, side2t, side3t);

    $("#result").text(endResult);
    $(".result").show();
  });

});
