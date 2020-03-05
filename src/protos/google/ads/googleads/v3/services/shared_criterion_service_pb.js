var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_shared_criterion_pb=require("../../../../../google/ads/googleads/v3/resources/shared_criterion_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.GetSharedCriterionRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateSharedCriterionResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.SharedCriterionOperation",null,global),proto.google.ads.googleads.v3.services.GetSharedCriterionRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetSharedCriterionRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.displayName="proto.google.ads.googleads.v3.services.GetSharedCriterionRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetSharedCriterionRequest;return proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetSharedCriterionRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.displayName="proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest"),proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.SharedCriterionOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest;return proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.SharedCriterionOperation,reader.readMessage(value,proto.google.ads.googleads.v3.services.SharedCriterionOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool(),msg.setPartialFailure(value);break;case 4:value=reader.readBool(),msg.setValidateOnly(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.SharedCriterionOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.SharedCriterionOperation,2)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.SharedCriterionOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v3.services.SharedCriterionOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.SharedCriterionOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.SharedCriterionOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.SharedCriterionOperation.displayName="proto.google.ads.googleads.v3.services.SharedCriterionOperation"),proto.google.ads.googleads.v3.services.SharedCriterionOperation.oneofGroups_=[[1,3]],proto.google.ads.googleads.v3.services.SharedCriterionOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,REMOVE:3},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.SharedCriterionOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.SharedCriterionOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.SharedCriterionOperation.toObject=function(includeInstance,msg){var f,obj={create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_shared_criterion_pb.SharedCriterion.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.SharedCriterionOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.SharedCriterionOperation;return proto.google.ads.googleads.v3.services.SharedCriterionOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.SharedCriterionOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_ads_googleads_v3_resources_shared_criterion_pb.SharedCriterion;reader.readMessage(value,google_ads_googleads_v3_resources_shared_criterion_pb.SharedCriterion.deserializeBinaryFromReader),msg.setCreate(value);break;case 3:value=reader.readString(),msg.setRemove(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.SharedCriterionOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.SharedCriterionOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_shared_criterion_pb.SharedCriterion.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_shared_criterion_pb.SharedCriterion,1)},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.SharedCriterionOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.SharedCriterionOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.SharedCriterionOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.services.SharedCriterionOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.displayName="proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse"),proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse;return proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v3.services.MutateSharedCriterionResult,reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateSharedCriterionResult,2)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateSharedCriterionResult,opt_index)},proto.google.ads.googleads.v3.services.MutateSharedCriteriaResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateSharedCriterionResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateSharedCriterionResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.displayName="proto.google.ads.googleads.v3.services.MutateSharedCriterionResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateSharedCriterionResult;return proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateSharedCriterionResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);