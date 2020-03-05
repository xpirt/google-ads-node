var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_ad_parameter_pb=require("../../../../../google/ads/googleads/v3/resources/ad_parameter_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.AdParameterOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetAdParameterRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateAdParameterResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateAdParametersRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateAdParametersResponse",null,global),proto.google.ads.googleads.v3.services.GetAdParameterRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetAdParameterRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetAdParameterRequest.displayName="proto.google.ads.googleads.v3.services.GetAdParameterRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetAdParameterRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetAdParameterRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetAdParameterRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetAdParameterRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetAdParameterRequest;return proto.google.ads.googleads.v3.services.GetAdParameterRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetAdParameterRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.GetAdParameterRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetAdParameterRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetAdParameterRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetAdParameterRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetAdParameterRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateAdParametersRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateAdParametersRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateAdParametersRequest.displayName="proto.google.ads.googleads.v3.services.MutateAdParametersRequest"),proto.google.ads.googleads.v3.services.MutateAdParametersRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateAdParametersRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.AdParameterOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateAdParametersRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateAdParametersRequest;return proto.google.ads.googleads.v3.services.MutateAdParametersRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.AdParameterOperation,reader.readMessage(value,proto.google.ads.googleads.v3.services.AdParameterOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool(),msg.setPartialFailure(value);break;case 4:value=reader.readBool(),msg.setValidateOnly(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateAdParametersRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.AdParameterOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.AdParameterOperation,2)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.AdParameterOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v3.services.MutateAdParametersRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v3.services.AdParameterOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.AdParameterOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.AdParameterOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.AdParameterOperation.displayName="proto.google.ads.googleads.v3.services.AdParameterOperation"),proto.google.ads.googleads.v3.services.AdParameterOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v3.services.AdParameterOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.AdParameterOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.AdParameterOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.AdParameterOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.AdParameterOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.AdParameterOperation;return proto.google.ads.googleads.v3.services.AdParameterOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.AdParameterOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter,reader.readMessage(value,google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter,reader.readMessage(value,google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter.deserializeBinaryFromReader),msg.setUpdate(value);break;case 3:value=reader.readString(),msg.setRemove(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.AdParameterOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.AdParameterOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter,1)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.AdParameterOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_ad_parameter_pb.AdParameter,2)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v3.services.AdParameterOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.AdParameterOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.AdParameterOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.services.AdParameterOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateAdParametersResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateAdParametersResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateAdParametersResponse.displayName="proto.google.ads.googleads.v3.services.MutateAdParametersResponse"),proto.google.ads.googleads.v3.services.MutateAdParametersResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateAdParametersResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateAdParameterResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateAdParametersResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateAdParametersResponse;return proto.google.ads.googleads.v3.services.MutateAdParametersResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v3.services.MutateAdParameterResult,reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateAdParameterResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateAdParametersResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateAdParameterResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateAdParameterResult,2)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateAdParameterResult,opt_index)},proto.google.ads.googleads.v3.services.MutateAdParametersResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateAdParameterResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateAdParameterResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateAdParameterResult.displayName="proto.google.ads.googleads.v3.services.MutateAdParameterResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateAdParameterResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateAdParameterResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateAdParameterResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateAdParameterResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateAdParameterResult;return proto.google.ads.googleads.v3.services.MutateAdParameterResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateAdParameterResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateAdParameterResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateAdParameterResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateAdParameterResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateAdParameterResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateAdParameterResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);