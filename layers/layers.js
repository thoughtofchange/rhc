var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_CatchmentBoundary_1 = new ol.format.GeoJSON();
var features_CatchmentBoundary_1 = format_CatchmentBoundary_1.readFeatures(json_CatchmentBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatchmentBoundary_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CatchmentBoundary_1.addFeatures(features_CatchmentBoundary_1);var lyr_CatchmentBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CatchmentBoundary_1, 
                style: style_CatchmentBoundary_1,
                title: '<img src="styles/legend/CatchmentBoundary_1.png" /> Catchment Boundary'
            });var format_ContourLines_2 = new ol.format.GeoJSON();
var features_ContourLines_2 = format_ContourLines_2.readFeatures(json_ContourLines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContourLines_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ContourLines_2.addFeatures(features_ContourLines_2);var lyr_ContourLines_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContourLines_2, 
                style: style_ContourLines_2,
    title: 'Contour Lines<br />\
    <img src="styles/legend/ContourLines_2_0.png" /> 70 - 100 m<br />\
    <img src="styles/legend/ContourLines_2_1.png" /> 100 - 200 m<br />\
    <img src="styles/legend/ContourLines_2_2.png" /> 200 - 300 m<br />\
    <img src="styles/legend/ContourLines_2_3.png" /> 300 - 400 m<br />\
    <img src="styles/legend/ContourLines_2_4.png" /> 400 - 500 m<br />\
    <img src="styles/legend/ContourLines_2_5.png" /> 500 - 570 m<br />'
        });var format_RiverHolmeTributaries_3 = new ol.format.GeoJSON();
var features_RiverHolmeTributaries_3 = format_RiverHolmeTributaries_3.readFeatures(json_RiverHolmeTributaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverHolmeTributaries_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RiverHolmeTributaries_3.addFeatures(features_RiverHolmeTributaries_3);var lyr_RiverHolmeTributaries_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RiverHolmeTributaries_3, 
                style: style_RiverHolmeTributaries_3,
                title: '<img src="styles/legend/RiverHolmeTributaries_3.png" /> River Holme & Tributaries'
            });var format_BoundaryMask_4 = new ol.format.GeoJSON();
var features_BoundaryMask_4 = format_BoundaryMask_4.readFeatures(json_BoundaryMask_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundaryMask_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_BoundaryMask_4.addFeatures(features_BoundaryMask_4);var lyr_BoundaryMask_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoundaryMask_4, 
                style: style_BoundaryMask_4,
                title: '<img src="styles/legend/BoundaryMask_4.png" /> Boundary Mask'
            });var format_ProjectSites_5 = new ol.format.GeoJSON();
var features_ProjectSites_5 = format_ProjectSites_5.readFeatures(json_ProjectSites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectSites_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ProjectSites_5.addFeatures(features_ProjectSites_5);var lyr_ProjectSites_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjectSites_5, 
                style: style_ProjectSites_5,
                title: '<img src="styles/legend/ProjectSites_5.png" /> Project Sites'
            });var format_StoneWeirs_6 = new ol.format.GeoJSON();
var features_StoneWeirs_6 = format_StoneWeirs_6.readFeatures(json_StoneWeirs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StoneWeirs_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_StoneWeirs_6.addFeatures(features_StoneWeirs_6);var lyr_StoneWeirs_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StoneWeirs_6, 
                style: style_StoneWeirs_6,
                title: '<img src="styles/legend/StoneWeirs_6.png" /> Stone Weirs'
            });var format_Rhododendron2019_7 = new ol.format.GeoJSON();
var features_Rhododendron2019_7 = format_Rhododendron2019_7.readFeatures(json_Rhododendron2019_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rhododendron2019_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Rhododendron2019_7.addFeatures(features_Rhododendron2019_7);var lyr_Rhododendron2019_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rhododendron2019_7, 
                style: style_Rhododendron2019_7,
                title: '<img src="styles/legend/Rhododendron2019_7.png" /> Rhododendron 2019'
            });var format_InvasiveTreatmentArea2019_8 = new ol.format.GeoJSON();
var features_InvasiveTreatmentArea2019_8 = format_InvasiveTreatmentArea2019_8.readFeatures(json_InvasiveTreatmentArea2019_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InvasiveTreatmentArea2019_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_InvasiveTreatmentArea2019_8.addFeatures(features_InvasiveTreatmentArea2019_8);var lyr_InvasiveTreatmentArea2019_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InvasiveTreatmentArea2019_8, 
                style: style_InvasiveTreatmentArea2019_8,
                title: '<img src="styles/legend/InvasiveTreatmentArea2019_8.png" /> Invasive Treatment Area 2019'
            });var format_JapaneseKnotweed2019_9 = new ol.format.GeoJSON();
var features_JapaneseKnotweed2019_9 = format_JapaneseKnotweed2019_9.readFeatures(json_JapaneseKnotweed2019_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JapaneseKnotweed2019_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JapaneseKnotweed2019_9.addFeatures(features_JapaneseKnotweed2019_9);var lyr_JapaneseKnotweed2019_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JapaneseKnotweed2019_9, 
                style: style_JapaneseKnotweed2019_9,
                title: '<img src="styles/legend/JapaneseKnotweed2019_9.png" /> Japanese Knotweed 2019'
            });var format_HimalayanBalsam2019_10 = new ol.format.GeoJSON();
var features_HimalayanBalsam2019_10 = format_HimalayanBalsam2019_10.readFeatures(json_HimalayanBalsam2019_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HimalayanBalsam2019_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_HimalayanBalsam2019_10.addFeatures(features_HimalayanBalsam2019_10);var lyr_HimalayanBalsam2019_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HimalayanBalsam2019_10, 
                style: style_HimalayanBalsam2019_10,
                title: '<img src="styles/legend/HimalayanBalsam2019_10.png" /> Himalayan Balsam 2019'
            });var format_GreyWagtail2019_11 = new ol.format.GeoJSON();
var features_GreyWagtail2019_11 = format_GreyWagtail2019_11.readFeatures(json_GreyWagtail2019_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreyWagtail2019_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GreyWagtail2019_11.addFeatures(features_GreyWagtail2019_11);var lyr_GreyWagtail2019_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreyWagtail2019_11, 
                style: style_GreyWagtail2019_11,
                title: '<img src="styles/legend/GreyWagtail2019_11.png" /> Grey Wagtail 2019'
            });var format_Dipper2019_12 = new ol.format.GeoJSON();
var features_Dipper2019_12 = format_Dipper2019_12.readFeatures(json_Dipper2019_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dipper2019_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Dipper2019_12.addFeatures(features_Dipper2019_12);var lyr_Dipper2019_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dipper2019_12, 
                style: style_Dipper2019_12,
                title: '<img src="styles/legend/Dipper2019_12.png" /> Dipper 2019'
            });var format_Cuckoo2019_13 = new ol.format.GeoJSON();
var features_Cuckoo2019_13 = format_Cuckoo2019_13.readFeatures(json_Cuckoo2019_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuckoo2019_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Cuckoo2019_13.addFeatures(features_Cuckoo2019_13);var lyr_Cuckoo2019_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuckoo2019_13, 
                style: style_Cuckoo2019_13,
                title: '<img src="styles/legend/Cuckoo2019_13.png" /> Cuckoo 2019'
            });var format_KingFisher2019_14 = new ol.format.GeoJSON();
var features_KingFisher2019_14 = format_KingFisher2019_14.readFeatures(json_KingFisher2019_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KingFisher2019_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_KingFisher2019_14.addFeatures(features_KingFisher2019_14);var lyr_KingFisher2019_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KingFisher2019_14, 
                style: style_KingFisher2019_14,
                title: '<img src="styles/legend/KingFisher2019_14.png" /> King Fisher 2019'
            });
var group_Birds = new ol.layer.Group({
                                layers: [lyr_GreyWagtail2019_11,lyr_Dipper2019_12,lyr_Cuckoo2019_13,lyr_KingFisher2019_14,],
                                title: "Birds"});
var group_HimalayanBalsam = new ol.layer.Group({
                                layers: [lyr_HimalayanBalsam2019_10,],
                                title: "Himalayan Balsam"});
var group_JapaneseKnotweed = new ol.layer.Group({
                                layers: [lyr_JapaneseKnotweed2019_9,],
                                title: "Japanese Knotweed"});
var group_TreatmentTargetArea = new ol.layer.Group({
                                layers: [lyr_InvasiveTreatmentArea2019_8,],
                                title: "Treatment Target Area"});
var group_Rhododendron = new ol.layer.Group({
                                layers: [lyr_Rhododendron2019_7,],
                                title: "Rhododendron"});
var group_RiverFeatures = new ol.layer.Group({
                                layers: [lyr_StoneWeirs_6,],
                                title: "River Features"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_CatchmentBoundary_1,lyr_ContourLines_2,lyr_RiverHolmeTributaries_3,lyr_BoundaryMask_4,lyr_ProjectSites_5,],
                                title: "Base Map"});

lyr_OSMStandard_0.setVisible(true);lyr_CatchmentBoundary_1.setVisible(true);lyr_ContourLines_2.setVisible(true);lyr_RiverHolmeTributaries_3.setVisible(true);lyr_BoundaryMask_4.setVisible(true);lyr_ProjectSites_5.setVisible(true);lyr_StoneWeirs_6.setVisible(false);lyr_Rhododendron2019_7.setVisible(false);lyr_InvasiveTreatmentArea2019_8.setVisible(false);lyr_JapaneseKnotweed2019_9.setVisible(false);lyr_HimalayanBalsam2019_10.setVisible(false);lyr_GreyWagtail2019_11.setVisible(false);lyr_Dipper2019_12.setVisible(false);lyr_Cuckoo2019_13.setVisible(false);lyr_KingFisher2019_14.setVisible(false);
var layersList = [group_BaseMap,group_RiverFeatures,group_Rhododendron,group_TreatmentTargetArea,group_JapaneseKnotweed,group_HimalayanBalsam,group_Birds];
lyr_CatchmentBoundary_1.set('fieldAliases', {'River Basi': 'River Basi', 'Management': 'Management', 'Operationa': 'Operationa', 'Waterbody': 'Waterbody', 'water body': 'water body', 'water bo_1': 'water bo_1', 'easting': 'easting', 'northing': 'northing', 'ngr': 'ngr', 'Hydromorph': 'Hydromorph', 'Immediate': 'Immediate', 'Immediat_1': 'Immediat_1', });
lyr_ContourLines_2.set('fieldAliases', {'Height (m)': 'Height (m)', 'layer': 'layer', 'ID': 'ID', });
lyr_RiverHolmeTributaries_3.set('fieldAliases', {'Name': 'Name', 'Form': 'Form', 'Flow': 'Flow', 'Length': 'Length', 'ID': 'ID', });
lyr_BoundaryMask_4.set('fieldAliases', {'id': 'id', });
lyr_ProjectSites_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_StoneWeirs_6.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'image': 'image', 'layer': 'layer', 'path': 'path', });
lyr_Rhododendron2019_7.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'name': 'name', 'cmt': 'cmt', 'layer': 'layer', });
lyr_InvasiveTreatmentArea2019_8.set('fieldAliases', {'id': 'id', 'Distance': 'Distance', });
lyr_JapaneseKnotweed2019_9.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'layer': 'layer', 'path': 'path', });
lyr_HimalayanBalsam2019_10.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'layer': 'layer', 'path': 'path', });
lyr_GreyWagtail2019_11.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'layer': 'layer', 'path': 'path', });
lyr_Dipper2019_12.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'layer': 'layer', 'path': 'path', });
lyr_Cuckoo2019_13.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', });
lyr_KingFisher2019_14.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'layer': 'layer', 'path': 'path', });
lyr_CatchmentBoundary_1.set('fieldImages', {'River Basi': 'TextEdit', 'Management': 'TextEdit', 'Operationa': 'TextEdit', 'Waterbody': 'TextEdit', 'water body': 'TextEdit', 'water bo_1': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'ngr': 'TextEdit', 'Hydromorph': 'TextEdit', 'Immediate': 'TextEdit', 'Immediat_1': 'TextEdit', });
lyr_ContourLines_2.set('fieldImages', {'Height (m)': 'TextEdit', 'layer': 'TextEdit', 'ID': 'Range', });
lyr_RiverHolmeTributaries_3.set('fieldImages', {'Name': 'TextEdit', 'Form': 'TextEdit', 'Flow': 'TextEdit', 'Length': 'Range', 'ID': 'Range', });
lyr_BoundaryMask_4.set('fieldImages', {'id': 'TextEdit', });
lyr_ProjectSites_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_StoneWeirs_6.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'TextEdit', 'image': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Rhododendron2019_7.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'layer': 'TextEdit', });
lyr_InvasiveTreatmentArea2019_8.set('fieldImages', {'id': 'TextEdit', 'Distance': 'TextEdit', });
lyr_JapaneseKnotweed2019_9.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_HimalayanBalsam2019_10.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_GreyWagtail2019_11.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Dipper2019_12.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Cuckoo2019_13.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'TextEdit', });
lyr_KingFisher2019_14.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CatchmentBoundary_1.set('fieldLabels', {});
lyr_ContourLines_2.set('fieldLabels', {});
lyr_RiverHolmeTributaries_3.set('fieldLabels', {});
lyr_BoundaryMask_4.set('fieldLabels', {});
lyr_ProjectSites_5.set('fieldLabels', {});
lyr_StoneWeirs_6.set('fieldLabels', {});
lyr_Rhododendron2019_7.set('fieldLabels', {});
lyr_InvasiveTreatmentArea2019_8.set('fieldLabels', {});
lyr_JapaneseKnotweed2019_9.set('fieldLabels', {});
lyr_HimalayanBalsam2019_10.set('fieldLabels', {});
lyr_GreyWagtail2019_11.set('fieldLabels', {});
lyr_Dipper2019_12.set('fieldLabels', {});
lyr_Cuckoo2019_13.set('fieldLabels', {});
lyr_KingFisher2019_14.set('fieldLabels', {});
lyr_KingFisher2019_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});