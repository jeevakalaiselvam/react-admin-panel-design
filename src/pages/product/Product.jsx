import {
    CalendarToday,
    EmailOutlined,
    LocationSearching,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { productData } from "../../dummyData";
import Chart from "../../components/chart/Chart";

export default function Product() {
    return (
        <div className="product">
            <div className="productTop">
                <h2 className="product__title">Product</h2>
                <Link to="/newProduct" className="link">
                    <button className="product__create">Create</button>
                </Link>
            </div>
            <div className="productcontainer">
                <div className="productcontainer__right">
                    <h2 className="product__info-title">Product Info</h2>
                    <div className="product__info">
                        <div className="product__info-left">
                            <div className="product__info--item">
                                <h4 className="product__item--title">
                                    Product ID
                                </h4>
                                <h4 className="product__item--seperator">:</h4>
                                <p className="product__item--value">123</p>
                            </div>
                            <div className="product__info--item">
                                <h4 className="product__item--title">Sales</h4>
                                <h4 className="product__item--seperator">:</h4>
                                <p className="product__item--value">12,200</p>
                            </div>
                            <div className="product__info--item">
                                <h4 className="product__item--title">Active</h4>
                                <h4 className="product__item--seperator">:</h4>
                                <p className="product__item--value">Yes</p>
                            </div>
                            <div className="product__info--item">
                                <h4 className="product__item--title">
                                    In Stock
                                </h4>
                                <h4 className="product__item--seperator">:</h4>
                                <p className="product__item--value">No</p>
                            </div>
                        </div>
                        <div className="product__info-right">
                            <img
                                className="product__image-image"
                                src="https://specials-images.forbesimg.com/imageserve/5f5293860289c180f9dd5a41/960x0.jpg?fit=scale"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="productcontainer__left">
                    <Chart
                        data={productData}
                        title={"Sales Analytics"}
                        dataKey={"Sales"}
                        grid={true}
                    />
                </div>
            </div>
        </div>
    );
}
