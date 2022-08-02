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

import {
  ErrorResponse,
  WebOrder,
  WebOrderList,
  WebOrderRequestBody,
  WebRate,
  WebShipment,
  WebShipmentPatchBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class WebOrders<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name GetWebOrders
   * @request GET:/web_orders
   */
  getWebOrders = (query?: { results?: number; page?: number }, params: RequestParams = {}) =>
    this.request<WebOrderList, ErrorResponse>({
      path: `/web_orders`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name CreateWebOrder
   * @request POST:/web_orders
   */
  createWebOrder = (data: WebOrderRequestBody, params: RequestParams = {}) =>
    this.request<WebOrder, ErrorResponse>({
      path: `/web_orders`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name GetWebOrder
   * @request GET:/web_orders/{WebOrderId}
   */
  getWebOrder = (webOrderId: string, params: RequestParams = {}) =>
    this.request<WebOrder, ErrorResponse>({
      path: `/web_orders/${webOrderId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name UpdateWebOrder
   * @request PATCH:/web_orders/{WebOrderId}/shipments/{ShipmentId}
   */
  updateWebOrder = (webOrderId: string, shipmentId: string, data: WebShipmentPatchBody, params: RequestParams = {}) =>
    this.request<WebShipment, ErrorResponse>({
      path: `/web_orders/${webOrderId}/shipments/${shipmentId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name GetWebOrderRates
   * @request GET:/web_orders/{WebOrderId}/shipments/{ShipmentId}/rates
   */
  getWebOrderRates = (webOrderId: string, shipmentId: string, params: RequestParams = {}) =>
    this.request<WebRate[], ErrorResponse>({
      path: `/web_orders/${webOrderId}/shipments/${shipmentId}/rates`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name PurchaseLabel
   * @request POST:/web_orders/{WebOrderId}/shipments/{ShipmentId}/transactions
   */
  purchaseLabel = (webOrderId: string, shipmentId: string, data: { rate_id: string }, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/web_orders/${webOrderId}/shipments/${shipmentId}/transactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
