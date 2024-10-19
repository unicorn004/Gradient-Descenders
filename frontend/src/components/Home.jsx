import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState({
    restaurant_name: '',
    restaurant_address: '',
    item_name: '',
    variation: '',
    item_quantity: '',
    item_price: '',
    item_total: '',
    converted_qty: '',
    conversion_qty: '',
    sub_total: '',
    grand_total: '',
    final_total: '',
    service_charge_amount: '',
    service_charge_rate: '',
    delivery_charges: '',
    vat_amount: '',
    cgst_amount: '',
    sgst_amount: '',
    igst: '',
    total_consumption: '',
    discount: '',
    outlet_discount: '',
    aggregator_discount: '',
    delivery_status: '',
    reason: '',
    customer_name: '',
    customer_phone: '',
    customer_address: '',
  });

  const [transactionData, setTransactionData] = useState({
    order_no: '',
    order_id: '',
    invoice_no: '',
    pos_invoice_no: '',
    kot_no: '',
    kot_id_k: '',
    order_acceptance_time: '',
    rider_arrival_time: '',
    received_time: '',
    accepted_time: '',
    delivery_charges: '',
    delivered_time: '',
    prepared_time_k: '',
    punch_time_k: '',
    created: '',
    created_date: '',
    timestamp: '',
    first_print_date: '',
    first_print_date_bsr: '',
    last_settlement_date: '',
    last_settlement_date_bsr: '',
    status: '',
    order_status: '',
    kot_item_status: '',
    order_type: '',
    order_type_k: '',
    delivery_status: '',
    item_status_k: '',
    settled_by: '',
    settled_by_bsr: '',
    settled_total: '',
    server_name: '',
    biller_name: '',
    biller: '',
    brand_grouping: '',
    client_sharing_code: '',
    payment_type: '',
    payment_type_detail: '',
    order_from: '',
    aggregator_order_no: '',
    area: '',
    month: '',
    date: '',
    category: '',
    category_name: '',
    non_taxable: false,
    change_log: '',
    tax: '',
    gst_paid_by_merchant: '',
    gst_paid_by_ecommerce: '',
    waived_off: false,
    duration_in_minutes: '',
    duration_in_minutes_bsr: '',
  });

  const handleRestaurantChange = (e) => {
    setRestaurantData({
      ...restaurantData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTransactionChange = (e) => {
    setTransactionData({
      ...transactionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/restaurantdata/', restaurantData);
      await axios.post('http://localhost:8000/api/restauranttransactions/', transactionData);
      alert('Data submitted successfully');
    } catch (error) {
      console.error('There was an error submitting the data!', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Restaurant Data Form</h2>
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
        <label>Restaurant Name</label>
        <input
          type="text"
          name="restaurant_name"
          value={restaurantData.restaurant_name}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Restaurant Address</label>
        <input
          type="text"
          name="restaurant_address"
          value={restaurantData.restaurant_address}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Item Name</label>
        <input
          type="text"
          name="item_name"
          value={restaurantData.item_name}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Variation</label>
        <input
          type="text"
          name="variation"
          value={restaurantData.variation}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Item Quantity</label>
        <input
          type="number"
          name="item_quantity"
          value={restaurantData.item_quantity}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Item Price</label>
        <input
          type="number"
          name="item_price"
          value={restaurantData.item_price}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Item Total</label>
        <input
          type="number"
          name="item_total"
          value={restaurantData.item_total}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Converted Quantity</label>
        <input
          type="number"
          name="converted_qty"
          value={restaurantData.converted_qty}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Conversion Quantity</label>
        <input
          type="number"
          name="conversion_qty"
          value={restaurantData.conversion_qty}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Sub Total</label>
        <input
          type="number"
          name="sub_total"
          value={restaurantData.sub_total}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Grand Total</label>
        <input
          type="number"
          name="grand_total"
          value={restaurantData.grand_total}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Final Total</label>
        <input
          type="number"
          name="final_total"
          value={restaurantData.final_total}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Service Charge Amount</label>
        <input
          type="number"
          name="service_charge_amount"
          value={restaurantData.service_charge_amount}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Service Charge Rate</label>
        <input
          type="number"
          name="service_charge_rate"
          value={restaurantData.service_charge_rate}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Delivery Charges</label>
        <input
          type="number"
          name="delivery_charges"
          value={restaurantData.delivery_charges}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>VAT Amount</label>
        <input
          type="number"
          name="vat_amount"
          value={restaurantData.vat_amount}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>CGST Amount</label>
        <input
          type="number"
          name="cgst_amount"
          value={restaurantData.cgst_amount}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>SGST Amount</label>
        <input
          type="number"
          name="sgst_amount"
          value={restaurantData.sgst_amount}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>IGST</label>
        <input
          type="number"
          name="igst"
          value={restaurantData.igst}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Total Consumption</label>
        <input
          type="number"
          name="total_consumption"
          value={restaurantData.total_consumption}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Discount</label>
        <input
          type="number"
          name="discount"
          value={restaurantData.discount}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Outlet Discount</label>
        <input
          type="number"
          name="outlet_discount"
          value={restaurantData.outlet_discount}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Aggregator Discount</label>
        <input
          type="number"
          name="aggregator_discount"
          value={restaurantData.aggregator_discount}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Delivery Status</label>
        <input
          type="text"
          name="delivery_status"
          value={restaurantData.delivery_status}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Reason</label>
        <input
          type="text"
          name="reason"
          value={restaurantData.reason}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Customer Name</label>
        <input
          type="text"
          name="customer_name"
          value={restaurantData.customer_name}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Customer Phone</label>
        <input
          type="text"
          name="customer_phone"
          value={restaurantData.customer_phone}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Customer Address</label>
        <input
          type="text"
          name="customer_address"
          value={restaurantData.customer_address}
          onChange={handleRestaurantChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <h2> Transaction Data Form</h2>
      <div style={{ marginBottom: '15px' }}>
        <label>Order No</label>
        <input
          type="text"
          name="order_no"
          value={transactionData.order_no}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Order ID</label>
        <input
          type="text"
          name="order_id"
          value={transactionData.order_id}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Invoice No</label>
        <input
          type="text"
          name="invoice_no"
          value={transactionData.invoice_no}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>POS Invoice No</label>
        <input
          type="text"
          name="pos_invoice_no"
          value={transactionData.pos_invoice_no}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>KOT No</label>
        <input
          type="text"
          name="kot_no"
          value={transactionData.kot_no}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>KOT ID</label>
        <input
          type="text"
          name="kot_id_k"
          value={transactionData.kot_id_k}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Order Acceptance Time</label>
        <input
          type="datetime-local"
          name="order_acceptance_time"
          value={transactionData.order_acceptance_time}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Rider Arrival Time</label>
        <input
          type="datetime-local"
          name="rider_arrival_time"
          value={transactionData.rider_arrival_time}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Received Time</label>
        <input
          type="datetime-local"
          name="received_time"
          value={transactionData.received_time}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Accepted Time</label>
        <input
          type="datetime-local"
          name="accepted_time"
          value={transactionData.accepted_time}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Delivery Charges</label>
        <input
          type="number"
          name="delivery_charges"
          value={transactionData.delivery_charges}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Delivered Time</label>
        <input
          type="datetime-local"
          name="delivered_time"
          value={transactionData.delivered_time}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Prepared Time</label>
        <input
          type="datetime-local"
          name="prepared_time_k"
          value={transactionData.prepared_time_k}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Punch Time</label>
        <input
          type="datetime-local"
          name="punch_time_k"
          value={transactionData.punch_time_k}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Created</label>
        <input
          type="datetime-local"
          name="created"
          value={transactionData.created}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Created Date</label>
        <input
          type="date"
          name="created_date"
          value={transactionData.created_date}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Timestamp</label>
        <input
          type="datetime-local"
          name="timestamp"
          value={transactionData.timestamp}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>First Print Date</label>
        <input
          type="date"
          name="first_print_date"
          value={transactionData.first_print_date}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>First Print Date BSR</label>
        <input
          type="date"
          name="first_print_date_bsr"
          value={transactionData.first_print_date_bsr}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Last Settlement Date</label>
        <input
          type="date"
          name="last_settlement_date"
          value={transactionData.last_settlement_date}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Last Settlement Date BSR</label>
        <input
          type="date"
          name="last_settlement_date_bsr"
          value={transactionData.last_settlement_date_bsr}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Status</label>
        <input
          type="text"
          name="status"
          value={transactionData.status}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Order Status</label>
        <input
          type="text"
          name="order_status"
          value={transactionData.order_status}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>KOT Item Status</label>
        <input
          type="text"
          name="kot_item_status"
          value={transactionData.kot_item_status}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Order Type</label>
        <input
          type="text"
          name="order_type"
          value={transactionData.order_type}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Order Type K</label>
        <input
          type="text"
          name="order_type_k"
          value={transactionData.order_type_k}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Delivery Status</label>
        <input
          type="text"
          name="delivery_status"
          value={transactionData.delivery_status}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Item Status K</label>
        <input
          type="text"
          name="item_status_k"
          value={transactionData.item_status_k}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Settled By</label>
        <input
          type="text"
          name="settled_by"
          value={transactionData.settled_by}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Settled By BSR</label>
        <input
          type="text"
          name="settled_by_bsr"
          value={transactionData.settled_by_bsr}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Settled Total</label>
        <input
          type="number"
          name="settled_total"
          value={transactionData.settled_total}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Server Name</label>
        <input
          type="text"
          name="server_name"
          value={transactionData.server_name}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Biller Name</label>
        <input
          type="text"
          name="biller_name"
          value={transactionData.biller_name}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Biller</label>
        <input
          type="text"
          name="biller"
          value={transactionData.biller}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Brand Grouping</label>
        <input
          type="text"
          name="brand_grouping"
          value={transactionData.brand_grouping}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Client Sharing Code</label>
        <input
          type="text"
          name="client_sharing_code"
          value={transactionData.client_sharing_code}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Payment Type</label>
        <input
          type="text"
          name="payment_type"
          value={transactionData.payment_type}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Payment Type Detail</label>
        <input
          type="text"
          name="payment_type_detail"
          value={transactionData.payment_type_detail}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Order From</label>
        <input
          type="text"
          name="order_from"
          value={transactionData.order_from}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Aggregator Order No</label>
        <input
          type="text"
          name="aggregator_order_no"
          value={transactionData.aggregator_order_no}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Area</label>
        <input
          type="text"
          name="area"
          value={transactionData.area}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Month</label>
        <input
          type="text"
          name="month"
          value={transactionData.month}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={transactionData.date}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={transactionData.category}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Category Name</label>
        <input
          type="text"
          name="category_name"
          value={transactionData.category_name}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Non Taxable</label>
        <input
          type="checkbox"
          name="non_taxable"
          checked={transactionData.non_taxable}
          onChange={handleTransactionChange}
          style={{ margin: '5px 0' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Change Log</label>
        <input
          type="text"
          name="change_log"
          value={transactionData.change_log}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Tax</label>
        <input
          type="text"
          name="tax"
          value={transactionData.tax}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>GST Paid By Merchant</label>
        <input
          type="text"
          name="gst_paid_by_merchant"
          value={transactionData.gst_paid_by_merchant}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>GST Paid By Ecommerce</label>
        <input
          type="text"
          name="gst_paid_by_ecommerce"
          value={transactionData.gst_paid_by_ecommerce}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Waived Off</label>
        <input
          type="checkbox"
          name="waived_off"
          checked={transactionData.waived_off}
          onChange={handleTransactionChange}
          style={{ margin: '5px 0' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Duration in Minutes</label>
        <input
          type="number"
          name="duration_in_minutes"
          value={transactionData.duration_in_minutes}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Duration in Minutes BSR</label>
        <input
          type="number"
          name="duration_in_minutes_bsr"
          value={transactionData.duration_in_minutes_bsr}
          onChange={handleTransactionChange}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc' }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Home;