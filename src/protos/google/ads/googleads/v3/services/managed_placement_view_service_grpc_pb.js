"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_managed_placement_view_service_pb=require("../../../../../google/ads/googleads/v3/services/managed_placement_view_service_pb.js"),google_ads_googleads_v3_resources_managed_placement_view_pb=require("../../../../../google/ads/googleads/v3/resources/managed_placement_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");function serialize_google_ads_googleads_v3_resources_ManagedPlacementView(arg){if(!(arg instanceof google_ads_googleads_v3_resources_managed_placement_view_pb.ManagedPlacementView))throw new Error("Expected argument of type google.ads.googleads.v3.resources.ManagedPlacementView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_ManagedPlacementView(buffer_arg){return google_ads_googleads_v3_resources_managed_placement_view_pb.ManagedPlacementView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetManagedPlacementViewRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetManagedPlacementViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetManagedPlacementViewRequest(buffer_arg){return google_ads_googleads_v3_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var ManagedPlacementViewServiceService=exports.ManagedPlacementViewServiceService={getManagedPlacementView:{path:"/google.ads.googleads.v3.services.ManagedPlacementViewService/GetManagedPlacementView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest,responseType:google_ads_googleads_v3_resources_managed_placement_view_pb.ManagedPlacementView,requestSerialize:serialize_google_ads_googleads_v3_services_GetManagedPlacementViewRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetManagedPlacementViewRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_ManagedPlacementView,responseDeserialize:deserialize_google_ads_googleads_v3_resources_ManagedPlacementView}};exports.ManagedPlacementViewServiceClient=grpc.makeGenericClientConstructor(ManagedPlacementViewServiceService);