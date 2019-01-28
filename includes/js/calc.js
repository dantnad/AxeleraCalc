// =============================================================================
// Calculo de valores
// =============================================================================
let tasaAnual = .36
let tasaMensual = tasaAnual/12;
let tasaMensualIVA = tasaMensual*1.16;

// =============================================================================
// Valores por defecto
// =============================================================================
$('#pagos').html('Ingresa los valores');

// =============================================================================
// Detección de cambios
// =============================================================================
$('#monto-range').change(()=>{
  $('#monto').val($('#monto-range').val());
  let total = ($('#plazo').val()*$('#monto').val()).toLocaleString();
  console.log(total);
  $('#pagos').html("$"+total);
})

$('#monto').change(()=>{
  if($('#monto').val() < 3000){
    $('#monto').val(3000);
  };
  if($('#monto').val() > 180000){
    $('#monto').val(3000);
  };
  $('#monto-range').val($('#monto').val());
  let total = ($('#plazo').val()*$('#monto').val()).toLocaleString();
  console.log(total);
  $('#pagos').html("$"+total);
})

$('#plazo-range').change(()=>{
  $('#plazo').val($('#plazo-range').val());
  let total = ($('#plazo').val()*$('#monto').val()).toLocaleString();
  console.log(total);
  $('#pagos').html("$"+total);
})

$('#plazo').change(()=>{
  if($('#plazo').val() < 3){
    $('#plazo').val(3);
  };
  if($('#plazo').val() > 18){
    $('#plazo').val(3);
  };
  $('#plazo-range').val($('#plazo').val());
  let total = ($('#plazo').val()*$('#monto').val()).toLocaleString();
  console.log(total);
  $('#pagos').html("$"+total);
})
