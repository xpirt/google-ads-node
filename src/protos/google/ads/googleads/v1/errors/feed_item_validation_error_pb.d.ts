// package: google.ads.googleads.v1.errors
// file: google/ads/googleads/v1/errors/feed_item_validation_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItemValidationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemValidationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemValidationErrorEnum): FeedItemValidationErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemValidationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemValidationErrorEnum;
  static deserializeBinaryFromReader(message: FeedItemValidationErrorEnum, reader: jspb.BinaryReader): FeedItemValidationErrorEnum;
}

export namespace FeedItemValidationErrorEnum {
  export type AsObject = {
  }

  export enum FeedItemValidationError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    STRING_TOO_SHORT = 2,
    STRING_TOO_LONG = 3,
    VALUE_NOT_SPECIFIED = 4,
    INVALID_DOMESTIC_PHONE_NUMBER_FORMAT = 5,
    INVALID_PHONE_NUMBER = 6,
    PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY = 7,
    PREMIUM_RATE_NUMBER_NOT_ALLOWED = 8,
    DISALLOWED_NUMBER_TYPE = 9,
    VALUE_OUT_OF_RANGE = 10,
    CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY = 11,
    CUSTOMER_NOT_WHITELISTED_FOR_CALLTRACKING = 12,
    INVALID_COUNTRY_CODE = 13,
    INVALID_APP_ID = 14,
    MISSING_ATTRIBUTES_FOR_FIELDS = 15,
    INVALID_TYPE_ID = 16,
    INVALID_EMAIL_ADDRESS = 17,
    INVALID_HTTPS_URL = 18,
    MISSING_DELIVERY_ADDRESS = 19,
    START_DATE_AFTER_END_DATE = 20,
    MISSING_FEED_ITEM_START_TIME = 21,
    MISSING_FEED_ITEM_END_TIME = 22,
    MISSING_FEED_ITEM_ID = 23,
    VANITY_PHONE_NUMBER_NOT_ALLOWED = 24,
    INVALID_REVIEW_EXTENSION_SNIPPET = 25,
    INVALID_NUMBER_FORMAT = 26,
    INVALID_DATE_FORMAT = 27,
    INVALID_PRICE_FORMAT = 28,
    UNKNOWN_PLACEHOLDER_FIELD = 29,
    MISSING_ENHANCED_SITELINK_DESCRIPTION_LINE = 30,
    REVIEW_EXTENSION_SOURCE_INELIGIBLE = 31,
    HYPHENS_IN_REVIEW_EXTENSION_SNIPPET = 32,
    DOUBLE_QUOTES_IN_REVIEW_EXTENSION_SNIPPET = 33,
    QUOTES_IN_REVIEW_EXTENSION_SNIPPET = 34,
    INVALID_FORM_ENCODED_PARAMS = 35,
    INVALID_URL_PARAMETER_NAME = 36,
    NO_GEOCODING_RESULT = 37,
    SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT = 38,
    CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED = 39,
    INVALID_PLACEHOLDER_FIELD_ID = 40,
    INVALID_URL_TAG = 41,
    LIST_TOO_LONG = 42,
    INVALID_ATTRIBUTES_COMBINATION = 43,
    DUPLICATE_VALUES = 44,
    INVALID_CALL_CONVERSION_ACTION_ID = 45,
    CANNOT_SET_WITHOUT_FINAL_URLS = 46,
    APP_ID_DOESNT_EXIST_IN_APP_STORE = 47,
    INVALID_FINAL_URL = 48,
    INVALID_TRACKING_URL = 49,
    INVALID_FINAL_URL_FOR_APP_DOWNLOAD_URL = 50,
    LIST_TOO_SHORT = 51,
    INVALID_USER_ACTION = 52,
    INVALID_TYPE_NAME = 53,
    INVALID_EVENT_CHANGE_STATUS = 54,
    INVALID_SNIPPETS_HEADER = 55,
    INVALID_ANDROID_APP_LINK = 56,
    NUMBER_TYPE_WITH_CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY = 57,
    RESERVED_KEYWORD_OTHER = 58,
    DUPLICATE_OPTION_LABELS = 59,
    DUPLICATE_OPTION_PREFILLS = 60,
    UNEQUAL_LIST_LENGTHS = 61,
    INCONSISTENT_CURRENCY_CODES = 62,
    PRICE_EXTENSION_HAS_DUPLICATED_HEADERS = 63,
    ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION = 64,
    PRICE_EXTENSION_HAS_TOO_FEW_ITEMS = 65,
    UNSUPPORTED_VALUE = 66,
    INVALID_FINAL_MOBILE_URL = 67,
    INVALID_KEYWORDLESS_AD_RULE_LABEL = 68,
    VALUE_TRACK_PARAMETER_NOT_SUPPORTED = 69,
    UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE = 70,
    INVALID_IOS_APP_LINK = 71,
    MISSING_IOS_APP_LINK_OR_IOS_APP_STORE_ID = 72,
    PROMOTION_INVALID_TIME = 73,
    PROMOTION_CANNOT_SET_PERCENT_OFF_AND_MONEY_AMOUNT_OFF = 74,
    PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT = 75,
    TOO_MANY_DECIMAL_PLACES_SPECIFIED = 76,
    AD_CUSTOMIZERS_NOT_ALLOWED = 77,
    INVALID_LANGUAGE_CODE = 78,
    UNSUPPORTED_LANGUAGE = 79,
    IF_FUNCTION_NOT_ALLOWED = 80,
    INVALID_FINAL_URL_SUFFIX = 81,
    INVALID_TAG_IN_FINAL_URL_SUFFIX = 82,
    INVALID_FINAL_URL_SUFFIX_FORMAT = 83,
    CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED = 84,
    ONLY_ONE_DELIVERY_OPTION_IS_ALLOWED = 85,
    NO_DELIVERY_OPTION_IS_SET = 86,
    INVALID_CONVERSION_REPORTING_STATE = 87,
    IMAGE_SIZE_WRONG = 88,
    EMAIL_DELIVERY_NOT_AVAILABLE_IN_COUNTRY = 89,
    AUTO_REPLY_NOT_AVAILABLE_IN_COUNTRY = 90,
    INVALID_LATITUDE_VALUE = 91,
    INVALID_LONGITUDE_VALUE = 92,
    TOO_MANY_LABELS = 93,
    INVALID_IMAGE_URL = 94,
    MISSING_LATITUDE_VALUE = 95,
    MISSING_LONGITUDE_VALUE = 96,
  }
}

