/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BaseWebOrder {
  created_at?: string;
  currency?: string;
  notes?: string;
  order_number?: string;
  order_status?: string;
  shipping_cost?: string;
  shipping_cost_currency?: string;
  shipping_method?: string;
  shop_app?: string;
  subtotal_price?: string;
  total_price?: string;
  total_tax?: string;
  total_weight_unit?: string;
  uses_line_items?: boolean;
  weight?: string;
  weight_unit?: string;
}

export type WebOrder = BaseWebOrder & {
  errors?: object[];
  hidden?: boolean;
  object_id?: string;
  object_owner?: string;
  validation_status?: string;
  line_items?: WebLineItem[];
  shipments?: WebShipment[];
  transactions?: WebTransaction[];
};

export type WebOrderRequestBody = BaseWebOrder & {
  address_from?: WebAddressRequestBody;
  address_to?: WebAddressRequestBody;
  line_items?: WebLineItemRequestBody[];
};

export interface WebOrderList {
  next?: string | null;
  previous?: string | null;
  results?: WebOrder[];
}

export interface BaseWebAddress {
  city?: string;
  company?: string;
  country?: string;
  email?: string;
  name?: string;
  phone?: string;
  state?: string;
  street1?: string;
  street2?: string;
  street3?: string;
  street_no?: string;
  zip?: string;
}

export type WebAddressRequestBody = BaseWebAddress;

export type WebAddress = BaseWebAddress & {
  ip?: string;
  is_residential?: boolean;
  latitude?: string;
  longitude?: string;
  metadata?: string;
  object_created?: string;
  object_id?: string;
  object_purpose?: string;
  object_source?: string;
  object_state?: string;
  object_updated?: string;
};

export interface BaseWebLineItem {
  country_of_origin?: string;
  currency?: string;

  /** @format int32 */
  quantity?: number;
  sku?: string;
  title?: string;
  unit_amount?: string;
  unit_weight?: string;
  weight_unit?: string;
}

export type WebLineItemRequestBody = BaseWebLineItem;

export type WebLineItem = BaseWebLineItem & {
  is_fulfilled?: boolean;
  total_amount?: string;
  total_weight?: string;
  variant?: string;
  variant_title?: string;
};

export interface WebShipment {
  /** The batch_entry id */
  id?: string;
  address_from?: WebAddress;
  address_return?: WebAddress;
  address_to?: WebAddress;
  alternate_address_to?: string;
  carrier_accounts?: object[];
  extras?: WebExtras;

  /** references to the ids of line_items in the WebOrder */
  line_items?: string[];
  object_created?: string;
  object_owner?: string;
  object_updated?: string;
  parcels?: WebParcel[];

  /** If null, no rates are available, check status to determine whether rates can be calculated. */
  rates?: WebRate[];
  shipment_date?: string;

  /** One of INCOMPLETE, PROCESSING_RATES, COMPLETE */
  status?: string;
}

export interface WebShipmentPatchBody {
  address_from?: WebAddressRequestBody;
  address_return?: WebAddressRequestBody;
  address_to?: WebAddressRequestBody;
  parcel?: WebParcel;
  extras?: WebExtras;
}

export interface WebParcel {
  distance_unit?: string;
  height?: string;
  length?: string;
  mass_unit?: string;
  weight?: string;
  width?: string;
  carrier_parcel_template?: WebCarrierParcelTemplate;
  user_parcel_template?: WebUserParcelTemplate;
}

export interface WebCarrierParcelTemplate {
  api_token?: string;
  distance_unit?: string;
  height?: string;
  is_variable_dimensions?: boolean;
  length?: string;
  name?: string;
  provider_id?: string;
  token?: string;
  width?: string;
}

export interface WebUserParcelTemplate {
  distance_unit?: string;
  height?: string;
  is_default?: boolean;
  length?: string;
  name?: string;
  object_id?: string;
  template?: WebCarrierParcelTemplate;
  weight?: string;
  weight_unit?: string;
  width?: string;
}

export interface WebRate {
  amount?: string;
  amount_local?: string;
  arrives_by?: string;
  attributes?: string[];
  carrier_account?: string;
  currency?: string;
  currency_local?: string;
  duration_terms?: string;

  /** @format int32 */
  estimated_days?: number;
  messages?: string[];
  object_created?: string;
  object_id?: string;
  object_owner?: string;
  provider?: string;
  provider_image_200?: string;
  provider_image_75?: string;
  servicelevel?: WebRatesServiceLevel;
  shipment?: string;
  test?: boolean;
  zone?: string;
}

export interface WebRatesServiceLevel {
  extended_token?: string;
  name?: string;
  parent_servicelevel?: string;
  terms?: string;
  token?: string;
}

export interface WebExtras {
  alcohol?: WebExtrasAlcohol;
  dry_ice?: WebExtrasDryIce;
  insurance?: WebExtrasInsurance;
  is_bypass_address_validation?: boolean;
  is_bypass_customs?: boolean;
  is_return_requested?: boolean;
  packing_slip_text?: string;
  signature_confirmation?: string;
}

export interface WebExtrasAlcohol {
  contains_alcohol?: boolean;
  recipient_type?: string;
}

export interface WebExtrasDryIce {
  contains_dry_ice?: boolean;

  /** @format int32 */
  weight?: number;
  weight_unit_id?: string;
}

export interface WebExtrasInsurance {
  amount?: string;
  content?: string;
  currency?: string;
  use_imported_amount?: boolean;
}

export interface WebTransaction {
  commercial_invoice_url?: string;
  eta?: string;
  entry_point?: string;
  label_url?: string;
  messages?: string[];
  metadata?: string;
  object_id?: string;
  object_owner?: string;
  object_state?: string;
  object_status?: string;
  rate?: string;
  refund_request_date?: string;
  tracking_number?: string;
  tracking_url_provider?: string;
  was_test?: boolean;
}

export type ErrorResponse = { detail?: string } | { details?: Record<string, string[]> };
