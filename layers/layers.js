var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mercados_1 = new ol.format.GeoJSON();
var features_mercados_1 = format_mercados_1.readFeatures(json_mercados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mercados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mercados_1.addFeatures(features_mercados_1);
var lyr_mercados_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mercados_1, 
                style: style_mercados_1,
                interactive: true,
                title: '<img src="styles/legend/mercados_1.png" /> mercados'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mercados_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mercados_1];
lyr_mercados_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'SECTOR': 'SECTOR', 'AREA_TRABA': 'AREA_TRABA', 'ZONA': 'ZONA', 'MANZANA': 'MANZANA', 'FRENTE': 'FRENTE', 'GPS_LON': 'GPS_LON', 'GPS_LAT': 'GPS_LAT', 'GPS_ALT': 'GPS_ALT', 'TIPO_VIA': 'TIPO_VIA', 'NOM_VIA': 'NOM_VIA', 'NRO_PUERTA': 'NRO_PUERTA', 'BLOCK': 'BLOCK', 'INTERIOR': 'INTERIOR', 'PISO': 'PISO', 'MZ': 'MZ', 'LOTE': 'LOTE', 'KM': 'KM', 'REFERENCIA': 'REFERENCIA', 'RAZON_SOCI': 'RAZON_SOCI', 'NOMBRE_MER': 'NOMBRE_MER', 'A�O_INIC': 'A�O_INIC', 'PAG_WEB': 'PAG_WEB', 'EMAIL': 'EMAIL', 'TELEFONO': 'TELEFONO', 'MOVIL': 'MOVIL', 'RESFIN': 'RESFIN', 'P29': 'P29', });
lyr_mercados_1.set('fieldImages', {'DEPARTAMEN': '', 'PROVINCIA': '', 'DISTRITO': '', 'SECTOR': '', 'AREA_TRABA': '', 'ZONA': '', 'MANZANA': '', 'FRENTE': '', 'GPS_LON': '', 'GPS_LAT': '', 'GPS_ALT': '', 'TIPO_VIA': '', 'NOM_VIA': '', 'NRO_PUERTA': '', 'BLOCK': '', 'INTERIOR': '', 'PISO': '', 'MZ': '', 'LOTE': '', 'KM': '', 'REFERENCIA': '', 'RAZON_SOCI': '', 'NOMBRE_MER': '', 'A�O_INIC': '', 'PAG_WEB': '', 'EMAIL': '', 'TELEFONO': '', 'MOVIL': '', 'RESFIN': '', 'P29': '', });
lyr_mercados_1.set('fieldLabels', {'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'SECTOR': 'no label', 'AREA_TRABA': 'no label', 'ZONA': 'no label', 'MANZANA': 'no label', 'FRENTE': 'no label', 'GPS_LON': 'no label', 'GPS_LAT': 'no label', 'GPS_ALT': 'no label', 'TIPO_VIA': 'no label', 'NOM_VIA': 'no label', 'NRO_PUERTA': 'no label', 'BLOCK': 'no label', 'INTERIOR': 'no label', 'PISO': 'no label', 'MZ': 'no label', 'LOTE': 'no label', 'KM': 'no label', 'REFERENCIA': 'no label', 'RAZON_SOCI': 'no label', 'NOMBRE_MER': 'no label', 'A�O_INIC': 'no label', 'PAG_WEB': 'no label', 'EMAIL': 'no label', 'TELEFONO': 'no label', 'MOVIL': 'no label', 'RESFIN': 'no label', 'P29': 'no label', });
lyr_mercados_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});