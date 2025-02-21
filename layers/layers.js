var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SouthRegionCafes_1 = new ol.format.GeoJSON();
var features_SouthRegionCafes_1 = format_SouthRegionCafes_1.readFeatures(json_SouthRegionCafes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthRegionCafes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthRegionCafes_1.addFeatures(features_SouthRegionCafes_1);
var lyr_SouthRegionCafes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthRegionCafes_1, 
                style: style_SouthRegionCafes_1,
                popuplayertitle: 'South Region Cafes',
                interactive: true,
    title: 'South Region Cafes<br />\
    <img src="styles/legend/SouthRegionCafes_1_0.png" /> District 103<br />\
    <img src="styles/legend/SouthRegionCafes_1_1.png" /> District 106<br />\
    <img src="styles/legend/SouthRegionCafes_1_2.png" /> District 107<br />\
    <img src="styles/legend/SouthRegionCafes_1_3.png" /> District 109<br />\
    <img src="styles/legend/SouthRegionCafes_1_4.png" /> District 110<br />'
        });
var format_NorthRegionCafes_2 = new ol.format.GeoJSON();
var features_NorthRegionCafes_2 = format_NorthRegionCafes_2.readFeatures(json_NorthRegionCafes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthRegionCafes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthRegionCafes_2.addFeatures(features_NorthRegionCafes_2);
var lyr_NorthRegionCafes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthRegionCafes_2, 
                style: style_NorthRegionCafes_2,
                popuplayertitle: 'North Region Cafes',
                interactive: true,
    title: 'North Region Cafes<br />\
    <img src="styles/legend/NorthRegionCafes_2_0.png" /> District 101<br />\
    <img src="styles/legend/NorthRegionCafes_2_1.png" /> District 102<br />\
    <img src="styles/legend/NorthRegionCafes_2_2.png" /> District 104<br />\
    <img src="styles/legend/NorthRegionCafes_2_3.png" /> District 105<br />\
    <img src="styles/legend/NorthRegionCafes_2_4.png" /> District 108<br />'
        });
var format_Cafes_3 = new ol.format.GeoJSON();
var features_Cafes_3 = format_Cafes_3.readFeatures(json_Cafes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafes_3.addFeatures(features_Cafes_3);
var lyr_Cafes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cafes_3, 
                style: style_Cafes_3,
                popuplayertitle: 'Cafes',
                interactive: false,
                title: 'Cafes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SouthRegionCafes_1.setVisible(true);lyr_NorthRegionCafes_2.setVisible(true);lyr_Cafes_3.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_SouthRegionCafes_1,lyr_NorthRegionCafes_2,lyr_Cafes_3];
lyr_SouthRegionCafes_1.set('fieldAliases', {'store_id': 'store_id', 'store_name': 'store_name', 'region': 'region', 'district': 'district', 'district_manager': 'district_manager', 'general_manager': 'general_manager', 'director_of_ops': 'director_of_ops', 'regional_manager': 'regional_manager', 'head_of_ops': 'head_of_ops', 'hr_partner': 'hr_partner', });
lyr_NorthRegionCafes_2.set('fieldAliases', {'store_id': 'store_id', 'store_name': 'store_name', 'region': 'region', 'district': 'district', 'district_manager': 'district_manager', 'general_manager': 'general_manager', 'director_of_ops': 'director_of_ops', 'regional_manager': 'regional_manager', 'head_of_ops': 'head_of_ops', 'hr_partner': 'hr_partner', });
lyr_Cafes_3.set('fieldAliases', {'store_id': 'store_id', 'store_name': 'store_name', 'region': 'region', 'district': 'district', 'district_manager': 'district_manager', 'general_manager': 'general_manager', 'director_of_ops': 'director_of_ops', 'regional_manager': 'regional_manager', 'head_of_ops': 'head_of_ops', 'hr_partner': 'hr_partner', });
lyr_SouthRegionCafes_1.set('fieldImages', {'store_id': 'TextEdit', 'store_name': 'TextEdit', 'region': 'TextEdit', 'district': 'Range', 'district_manager': 'TextEdit', 'general_manager': 'TextEdit', 'director_of_ops': 'TextEdit', 'regional_manager': 'TextEdit', 'head_of_ops': 'TextEdit', 'hr_partner': 'TextEdit', });
lyr_NorthRegionCafes_2.set('fieldImages', {'store_id': 'TextEdit', 'store_name': 'TextEdit', 'region': 'TextEdit', 'district': 'Range', 'district_manager': 'TextEdit', 'general_manager': 'TextEdit', 'director_of_ops': 'TextEdit', 'regional_manager': 'TextEdit', 'head_of_ops': 'TextEdit', 'hr_partner': 'TextEdit', });
lyr_Cafes_3.set('fieldImages', {'store_id': 'TextEdit', 'store_name': 'TextEdit', 'region': 'TextEdit', 'district': 'Range', 'district_manager': 'TextEdit', 'general_manager': 'TextEdit', 'director_of_ops': 'TextEdit', 'regional_manager': 'TextEdit', 'head_of_ops': 'TextEdit', 'hr_partner': 'TextEdit', });
lyr_SouthRegionCafes_1.set('fieldLabels', {'store_id': 'inline label - always visible', 'store_name': 'inline label - always visible', 'region': 'inline label - always visible', 'district': 'inline label - always visible', 'district_manager': 'header label - always visible', 'general_manager': 'header label - always visible', 'director_of_ops': 'hidden field', 'regional_manager': 'hidden field', 'head_of_ops': 'hidden field', 'hr_partner': 'hidden field', });
lyr_NorthRegionCafes_2.set('fieldLabels', {'store_id': 'inline label - always visible', 'store_name': 'inline label - always visible', 'region': 'inline label - always visible', 'district': 'inline label - always visible', 'district_manager': 'header label - always visible', 'general_manager': 'header label - always visible', 'director_of_ops': 'hidden field', 'regional_manager': 'hidden field', 'head_of_ops': 'hidden field', 'hr_partner': 'hidden field', });
lyr_Cafes_3.set('fieldLabels', {'store_id': 'no label', 'store_name': 'no label', 'region': 'no label', 'district': 'no label', 'district_manager': 'no label', 'general_manager': 'no label', 'director_of_ops': 'no label', 'regional_manager': 'no label', 'head_of_ops': 'no label', 'hr_partner': 'no label', });
lyr_Cafes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});