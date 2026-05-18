var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KepadatanPendudukKotaYogyakarta_1 = new ol.format.GeoJSON();
var features_KepadatanPendudukKotaYogyakarta_1 = format_KepadatanPendudukKotaYogyakarta_1.readFeatures(json_KepadatanPendudukKotaYogyakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanPendudukKotaYogyakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPendudukKotaYogyakarta_1.addFeatures(features_KepadatanPendudukKotaYogyakarta_1);
var lyr_KepadatanPendudukKotaYogyakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepadatanPendudukKotaYogyakarta_1, 
                style: style_KepadatanPendudukKotaYogyakarta_1,
                popuplayertitle: 'Kepadatan Penduduk Kota Yogyakarta',
                interactive: true,
    title: 'Kepadatan Penduduk Kota Yogyakarta<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_0.png" /> Sangat Ringan<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_1.png" /> Ringan<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_2.png" /> Sedang<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_3.png" /> Padat<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_4.png" /> Sangat Padat<br />' });
var format_Point_2 = new ol.format.GeoJSON();
var features_Point_2 = format_Point_2.readFeatures(json_Point_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_2.addFeatures(features_Point_2);
cluster_Point_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Point_2
});
var lyr_Point_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Point_2, 
                style: style_Point_2,
                popuplayertitle: 'Point',
                interactive: true,
                title: '<img src="styles/legend/Point_2.png" /> Point'
            });
var format_line_3 = new ol.format.GeoJSON();
var features_line_3 = format_line_3.readFeatures(json_line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_line_3.addFeatures(features_line_3);
var lyr_line_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_line_3, 
                style: style_line_3,
                popuplayertitle: 'line',
                interactive: true,
                title: '<img src="styles/legend/line_3.png" /> line'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KepadatanPendudukKotaYogyakarta_1.setVisible(true);lyr_Point_2.setVisible(true);lyr_line_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KepadatanPendudukKotaYogyakarta_1,lyr_Point_2,lyr_line_3];
lyr_KepadatanPendudukKotaYogyakarta_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas': 'Luas Wilayah (Ha)', 'Join_Pendu': 'Jumlah Penduduk (ribu)', 'Join_Kepad': 'Kepadatan Penduduk (ribu per km2)', 'Join_Banji': 'Join_Banji', 'Join_Cuaca': 'Join_Cuaca', 'Join_Erups': 'Join_Erups', 'Join_Gelom': 'Join_Gelom', 'Join_Gel_1': 'Join_Gel_1', 'Join_Gempa': 'Join_Gempa', 'Join_Kebak': 'Join_Kebak', 'Join_Keker': 'Join_Keker', 'Join_Tanah': 'Join_Tanah', });
lyr_Point_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas': 'Luas Wilayah (Ha)', 'Join_Pendu': 'Jumlah Penduduk (ribu)', 'Join_Kepad': 'Kepadatan Penduduk (ribu per km2)', 'Join_Banji': 'Join_Banji', 'Join_Cuaca': 'Join_Cuaca', 'Join_Erups': 'Join_Erups', 'Join_Gelom': 'Join_Gelom', 'Join_Gel_1': 'Join_Gel_1', 'Join_Gempa': 'Join_Gempa', 'Join_Kebak': 'Join_Kebak', 'Join_Keker': 'Join_Keker', 'Join_Tanah': 'Join_Tanah', });
lyr_line_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas': 'Luas Wilayah (Ha)', 'Join_Pendu': 'Jumlah Penduduk (ribu)', 'Join_Kepad': 'Kepadatan Penduduk (ribu per km2)', 'Join_Banji': 'Join_Banji', 'Join_Cuaca': 'Join_Cuaca', 'Join_Erups': 'Join_Erups', 'Join_Gelom': 'Join_Gelom', 'Join_Gel_1': 'Join_Gel_1', 'Join_Gempa': 'Join_Gempa', 'Join_Kebak': 'Join_Kebak', 'Join_Keker': 'Join_Keker', 'Join_Tanah': 'Join_Tanah', });
lyr_KepadatanPendudukKotaYogyakarta_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'TextEdit', 'Field': 'Hidden', 'Join_No': 'Hidden', 'Join_Luas': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Banji': 'Hidden', 'Join_Cuaca': 'Hidden', 'Join_Erups': 'Hidden', 'Join_Gelom': 'Hidden', 'Join_Gel_1': 'Hidden', 'Join_Gempa': 'Hidden', 'Join_Kebak': 'Hidden', 'Join_Keker': 'Hidden', 'Join_Tanah': 'Hidden', });
lyr_Point_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'Join_No': 'TextEdit', 'Join_Luas': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Banji': 'TextEdit', 'Join_Cuaca': 'TextEdit', 'Join_Erups': 'TextEdit', 'Join_Gelom': 'TextEdit', 'Join_Gel_1': 'TextEdit', 'Join_Gempa': 'TextEdit', 'Join_Kebak': 'TextEdit', 'Join_Keker': 'TextEdit', 'Join_Tanah': 'TextEdit', });
lyr_line_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'Join_No': 'TextEdit', 'Join_Luas': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Banji': 'TextEdit', 'Join_Cuaca': 'TextEdit', 'Join_Erups': 'TextEdit', 'Join_Gelom': 'TextEdit', 'Join_Gel_1': 'TextEdit', 'Join_Gempa': 'TextEdit', 'Join_Kebak': 'TextEdit', 'Join_Keker': 'TextEdit', 'Join_Tanah': 'TextEdit', });
lyr_KepadatanPendudukKotaYogyakarta_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'Join_Luas': 'inline label - always visible', 'Join_Pendu': 'inline label - always visible', 'Join_Kepad': 'inline label - always visible', });
lyr_Point_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'Join_No': 'no label', 'Join_Luas': 'no label', 'Join_Pendu': 'no label', 'Join_Kepad': 'no label', 'Join_Banji': 'no label', 'Join_Cuaca': 'no label', 'Join_Erups': 'no label', 'Join_Gelom': 'no label', 'Join_Gel_1': 'no label', 'Join_Gempa': 'no label', 'Join_Kebak': 'no label', 'Join_Keker': 'no label', 'Join_Tanah': 'no label', });
lyr_line_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'Join_No': 'no label', 'Join_Luas': 'no label', 'Join_Pendu': 'no label', 'Join_Kepad': 'no label', 'Join_Banji': 'no label', 'Join_Cuaca': 'no label', 'Join_Erups': 'no label', 'Join_Gelom': 'no label', 'Join_Gel_1': 'no label', 'Join_Gempa': 'no label', 'Join_Kebak': 'no label', 'Join_Keker': 'no label', 'Join_Tanah': 'no label', });
lyr_line_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});