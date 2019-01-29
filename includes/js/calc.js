// =============================================================================
// Calculo de valores
// =============================================================================
let tasaAnual = .36
let tasaMensual = tasaAnual/12;

// =============================================================================
// Valores por defecto
// =============================================================================
$('#pagos').html('Ingresa los valores');


function calculoPagos(){
  let tasaPlazo = Math.pow(1+tasaMensual, $('#plazo').val());
  let calculo = tasaMensual*tasaPlazo*($('#monto').val()/(tasaPlazo-1));
  $('#pagos').html('$'+calculo.toLocaleString());
}

// =============================================================================
// Detección de cambios
// =============================================================================
$('#monto-range').change(()=>{
  $('#monto').val($('#monto-range').val());
  calculoPagos();
})

$('#monto').change(()=>{
  if($('#monto').val() < 3000){
    $('#monto').val(3000);
  };
  if($('#monto').val() > 180000){
    $('#monto').val(3000);
  };
  $('#monto-range').val($('#monto').val());
  calculoPagos();
})

$('#plazo-range').change(()=>{
  $('#plazo').val($('#plazo-range').val());
  calculoPagos();
})

$('#plazo').change(()=>{
  if($('#plazo').val() < 3){
    $('#plazo').val(3);
  };
  if($('#plazo').val() > 18){
    $('#plazo').val(3);
  };
  $('#plazo-range').val($('#plazo').val());
  calculoPagos();
})
