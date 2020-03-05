"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_extension_feed_item_service_pb=require("../../../../../google/ads/googleads/v3/services/extension_feed_item_service_pb.js"),google_ads_googleads_v3_resources_extension_feed_item_pb=require("../../../../../google/ads/googleads/v3/resources/extension_feed_item_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v3_resources_ExtensionFeedItem(arg){if(!(arg instanceof google_ads_googleads_v3_resources_extension_feed_item_pb.ExtensionFeedItem))throw new Error("Expected argument of type google.ads.googleads.v3.resources.ExtensionFeedItem");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_ExtensionFeedItem(buffer_arg){return google_ads_googleads_v3_resources_extension_feed_item_pb.ExtensionFeedItem.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetExtensionFeedItemRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetExtensionFeedItemRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetExtensionFeedItemRequest(buffer_arg){return google_ads_googleads_v3_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_MutateExtensionFeedItemsRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.MutateExtensionFeedItemsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_MutateExtensionFeedItemsRequest(buffer_arg){return google_ads_googleads_v3_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_MutateExtensionFeedItemsResponse(arg){if(!(arg instanceof google_ads_googleads_v3_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse))throw new Error("Expected argument of type google.ads.googleads.v3.services.MutateExtensionFeedItemsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_MutateExtensionFeedItemsResponse(buffer_arg){return google_ads_googleads_v3_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var ExtensionFeedItemServiceService=exports.ExtensionFeedItemServiceService={getExtensionFeedItem:{path:"/google.ads.googleads.v3.services.ExtensionFeedItemService/GetExtensionFeedItem",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest,responseType:google_ads_googleads_v3_resources_extension_feed_item_pb.ExtensionFeedItem,requestSerialize:serialize_google_ads_googleads_v3_services_GetExtensionFeedItemRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetExtensionFeedItemRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_ExtensionFeedItem,responseDeserialize:deserialize_google_ads_googleads_v3_resources_ExtensionFeedItem},mutateExtensionFeedItems:{path:"/google.ads.googleads.v3.services.ExtensionFeedItemService/MutateExtensionFeedItems",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest,responseType:google_ads_googleads_v3_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse,requestSerialize:serialize_google_ads_googleads_v3_services_MutateExtensionFeedItemsRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_MutateExtensionFeedItemsRequest,responseSerialize:serialize_google_ads_googleads_v3_services_MutateExtensionFeedItemsResponse,responseDeserialize:deserialize_google_ads_googleads_v3_services_MutateExtensionFeedItemsResponse}};exports.ExtensionFeedItemServiceClient=grpc.makeGenericClientConstructor(ExtensionFeedItemServiceService);