"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb=require("../../../../../google/ads/googleads/v3/services/keyword_plan_ad_group_service_pb.js"),google_ads_googleads_v3_resources_keyword_plan_ad_group_pb=require("../../../../../google/ads/googleads/v3/resources/keyword_plan_ad_group_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v3_resources_KeywordPlanAdGroup(arg){if(!(arg instanceof google_ads_googleads_v3_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup))throw new Error("Expected argument of type google.ads.googleads.v3.resources.KeywordPlanAdGroup");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_KeywordPlanAdGroup(buffer_arg){return google_ads_googleads_v3_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetKeywordPlanAdGroupRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetKeywordPlanAdGroupRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetKeywordPlanAdGroupRequest(buffer_arg){return google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_MutateKeywordPlanAdGroupsRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.MutateKeywordPlanAdGroupsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_MutateKeywordPlanAdGroupsRequest(buffer_arg){return google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_MutateKeywordPlanAdGroupsResponse(arg){if(!(arg instanceof google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse))throw new Error("Expected argument of type google.ads.googleads.v3.services.MutateKeywordPlanAdGroupsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_MutateKeywordPlanAdGroupsResponse(buffer_arg){return google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var KeywordPlanAdGroupServiceService=exports.KeywordPlanAdGroupServiceService={getKeywordPlanAdGroup:{path:"/google.ads.googleads.v3.services.KeywordPlanAdGroupService/GetKeywordPlanAdGroup",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest,responseType:google_ads_googleads_v3_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup,requestSerialize:serialize_google_ads_googleads_v3_services_GetKeywordPlanAdGroupRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetKeywordPlanAdGroupRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_KeywordPlanAdGroup,responseDeserialize:deserialize_google_ads_googleads_v3_resources_KeywordPlanAdGroup},mutateKeywordPlanAdGroups:{path:"/google.ads.googleads.v3.services.KeywordPlanAdGroupService/MutateKeywordPlanAdGroups",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest,responseType:google_ads_googleads_v3_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse,requestSerialize:serialize_google_ads_googleads_v3_services_MutateKeywordPlanAdGroupsRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_MutateKeywordPlanAdGroupsRequest,responseSerialize:serialize_google_ads_googleads_v3_services_MutateKeywordPlanAdGroupsResponse,responseDeserialize:deserialize_google_ads_googleads_v3_services_MutateKeywordPlanAdGroupsResponse}};exports.KeywordPlanAdGroupServiceClient=grpc.makeGenericClientConstructor(KeywordPlanAdGroupServiceService);