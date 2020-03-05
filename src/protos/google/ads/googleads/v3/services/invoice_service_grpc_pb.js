"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_invoice_service_pb=require("../../../../../google/ads/googleads/v3/services/invoice_service_pb.js"),google_ads_googleads_v3_enums_month_of_year_pb=require("../../../../../google/ads/googleads/v3/enums/month_of_year_pb.js"),google_ads_googleads_v3_resources_invoice_pb=require("../../../../../google/ads/googleads/v3/resources/invoice_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");function serialize_google_ads_googleads_v3_services_ListInvoicesRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_invoice_service_pb.ListInvoicesRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.ListInvoicesRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_ListInvoicesRequest(buffer_arg){return google_ads_googleads_v3_services_invoice_service_pb.ListInvoicesRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_ListInvoicesResponse(arg){if(!(arg instanceof google_ads_googleads_v3_services_invoice_service_pb.ListInvoicesResponse))throw new Error("Expected argument of type google.ads.googleads.v3.services.ListInvoicesResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_ListInvoicesResponse(buffer_arg){return google_ads_googleads_v3_services_invoice_service_pb.ListInvoicesResponse.deserializeBinary(new Uint8Array(buffer_arg))}var InvoiceServiceService=exports.InvoiceServiceService={listInvoices:{path:"/google.ads.googleads.v3.services.InvoiceService/ListInvoices",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_invoice_service_pb.ListInvoicesRequest,responseType:google_ads_googleads_v3_services_invoice_service_pb.ListInvoicesResponse,requestSerialize:serialize_google_ads_googleads_v3_services_ListInvoicesRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_ListInvoicesRequest,responseSerialize:serialize_google_ads_googleads_v3_services_ListInvoicesResponse,responseDeserialize:deserialize_google_ads_googleads_v3_services_ListInvoicesResponse}};exports.InvoiceServiceClient=grpc.makeGenericClientConstructor(InvoiceServiceService);