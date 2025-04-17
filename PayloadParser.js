function parseUplink(device, payload)
{
	function ExtractTagData(tagValuesObject){
        v = null;
        q = null;
        ts = null;
        return {
            v: (tagValuesObject["v"]),//.toFixed(2)),
            q: tagValuesObject["q"],
            ts: new Date(tagValuesObject["ts"]).toUTCString()
        }
    }

    var N3uronData = payload.asJsonObject();
	
    env.log(N3uronData);
 
   //Recorremos cada "tag" del array del json y procesamos lo que nos interesan
   for (let tag in N3uronData) {
  
    switch (tag){
        case "/PLC1/FIT8005":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("FIT8005");
                etv1.updateFlowSensorValueUnits(ValueData.v, ValueData.ts);
            });
            break;

        case "/PLC1/FIT8005_TOT":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("FIT8005_TOT");
                etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break; 

        case "/PLC1/TT_Glicol_Termo":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TT_Glicol_Termo");
                etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
            });
            break;

        case "/PLC1/Coccion_TT_Mosto_Cal":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Coccion_TT_Mosto_Cal");
                etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
            });
            break;

        case "/PLC1/Coccion_TT_Mosto_Frio":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Coccion_TT_Mosto_Frio");
                etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
            });
            break;

        case "/PLC1/SPPresionColector":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("SPPresionColector");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(3), ValueData.ts);
            });
            break;

      case "/PLC1/LT-609":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("LT-609");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(0), ValueData.ts);
            });
            break;
	 	// default: 
	 	 //	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	// break; 

        
	 }
   }

}