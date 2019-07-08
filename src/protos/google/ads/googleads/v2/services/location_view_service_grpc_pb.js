"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_location_view_service_pb=require("../../../../../google/ads/googleads/v2/services/location_view_service_pb.js"),google_ads_googleads_v2_resources_location_view_pb=require("../../../../../google/ads/googleads/v2/resources/location_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_LocationView(arg){if(!(arg instanceof google_ads_googleads_v2_resources_location_view_pb.LocationView))throw new Error("Expected argument of type google.ads.googleads.v2.resources.LocationView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_LocationView(buffer_arg){return google_ads_googleads_v2_resources_location_view_pb.LocationView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetLocationViewRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_location_view_service_pb.GetLocationViewRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetLocationViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetLocationViewRequest(buffer_arg){return google_ads_googleads_v2_services_location_view_service_pb.GetLocationViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var LocationViewServiceService=exports.LocationViewServiceService={getLocationView:{path:"/google.ads.googleads.v2.services.LocationViewService/GetLocationView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_location_view_service_pb.GetLocationViewRequest,responseType:google_ads_googleads_v2_resources_location_view_pb.LocationView,requestSerialize:serialize_google_ads_googleads_v2_services_GetLocationViewRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetLocationViewRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_LocationView,responseDeserialize:deserialize_google_ads_googleads_v2_resources_LocationView}};exports.LocationViewServiceClient=grpc.makeGenericClientConstructor(LocationViewServiceService);