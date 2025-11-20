"use client";

import { PlusCircle } from "lucide-react";
import Reviews from "../reviews/Reviews";
import "./Contact.css";
import { Suspense, useEffect, useMemo, useState } from "react";
import ContactContent from "./ContactContent";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input"; 
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import dynamic from "next/dynamic";


const Select = dynamic(() => import("react-select"), { ssr: false });
const allProducts = [
  "SS Hinges Premium Welded",
  "Door Chain",
  "Door Handles",
  "Door Stoppers",
  "Cabinet Handles",
  "Caster Wheel",
  "Aldrop",
  "SS Kitchen Basket",
  "Sofa Legs",
  "Tower Bolt",
  "Mortise Locks",
  "Knobs",
  "Brass Hinges",
  "Ganesh Door Handle",
];

export default function Contact() {
  const [products, setProducts] = useState<string[]>([]);
const { register, setValue, watch, handleSubmit } = useForm({
  defaultValues: {
    name: "",
    email: "",
    country: "IN",
    phone: "",
    product: "",
  },
});

  const selectedCountry = watch("country");
  const phoneValue = watch("phone");

  const countryOptions = useMemo(
    () =>
      getCountries().map((c) => ({
        value: c,
        label: (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src={`https://flagcdn.com/24x18/${c.toLowerCase()}.png`}
              style={{ width: "20px", height: "15px" }}
            />
            <span>
              {new Intl.DisplayNames(["en"], { type: "region" }).of(c)}
            </span>
          </div>
        ),
      })),
    []
  );

  const selectedCountryOption = useMemo(
    () => countryOptions.find((opt) => opt.value === selectedCountry),
    [countryOptions, selectedCountry]
  );

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const selectedProduct = params.get("product");
  setProducts(selectedProduct ? [selectedProduct] : [""]);

 
  const defaultCode = "+" + getCountryCallingCode("IN");
  setValue("phone", defaultCode);
}, []);
  const handleAddProduct = () => setProducts([...products, ""]);

  const handleProductChange = (index: number, value: string) => {
    const updated = [...products];
    updated[index] = value;
    setProducts(updated);
  };

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("FORM:", data);
    console.log("PRODUCTS:", products);
  };

  const getAvailableProducts = (currentValue: string) =>
    allProducts.filter((p) => !products.includes(p) || p === currentValue);

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact-grid">
            <ContactContent />

            <div className="contact-grid-items-form">
              <h4>Get a Quote</h4>

              <Suspense fallback={<div>Loading form...</div>}>
                <form onSubmit={handleSubmit(onSubmit)}>

                  {/* Hidden RHF country field */}
                  <input type="hidden" {...register("country")} />

                  {/* Name */}
                  <div className="input-box">
                    <label>
                      Name <span style={{ color: "#FF1F1F" }}>*</span>
                    </label>
                    <input type="text" {...register("name")} />
                  </div>

                  {/* Email */}
                  <div className="input-box">
                    <label>
                      Email <span style={{ color: "#FF1F1F" }}>*</span>
                    </label>
                    <input type="email" {...register("email")} />
                  </div>

                  {/* PHONE SECTION */}
                  <div className="input-box">
                    <label>
                      Phone Number <span style={{ color: "#FF1F1F" }}>*</span>
                    </label>

                    <div className="phone-input" style={{ display: "flex", gap: "1rem" }}>

                      {/* COUNTRY SELECT LEFT */}
                      <div style={{ flex: 1 }}>
                        <Select
                          classNamePrefix="react-select"
                          value={selectedCountryOption}
                          onChange={(opt: any) => {
                            setValue("country", opt.value);

                            // AUTO ADD COUNTRY CALLING CODE
                            const code = "+" + getCountryCallingCode(opt.value);

                            // Only set if empty or previously a country code
                            if (!phoneValue || phoneValue.startsWith("+")) {
                              setValue("phone", code);
                            }
                          }}
                          options={countryOptions}
                          placeholder="Select Country"
                        />
                      </div>

                      <div style={{ flex: 2 }}>
                        <PhoneInput
                          value={phoneValue}
                          onChange={(value) => setValue("phone", value ?? "")}

                          placeholder="Phone number"
                          className="phone-box"
                        />
                      </div>
                    </div>
                  </div>

                  {/* DYNAMIC PRODUCT LIST */}
                  {products.map((prod, index) => (
                    <div className="input-column" key={index}>
                      <div className="input-box">
                        <label>
                          Product {index + 1}
                          <span style={{ color: "#FF1F1F" }}>*</span>
                        </label>
                        <select
                          value={prod}
                          onChange={(e) =>
                            handleProductChange(index, e.target.value)
                          }
                        >
                          <option value="">Select a product</option>
                          {getAvailableProducts(prod).map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="input-box">
                        <label>
                          Min. Order Quantity (MOQ)
                          <span style={{ color: "#FF1F1F" }}>*</span>
                        </label>
                        <select name={`quantity_${index}`}>
                          <option>10</option>
                          <option>20</option>
                          <option>30</option>
                          <option>40</option>
                          <option>50</option>
                        </select>
                      </div>
                    </div>
                  ))}

                  {/* Add new product */}
                  <div className="new-product" onClick={handleAddProduct}>
                    <PlusCircle className="w-7 h-7 text-blue-700 cursor-pointer" />
                    <span>Add New Product</span>
                  </div>

                  {/* Submit */}
                  <div className="contact-form-btn">
                    <button className="btn large" type="submit">
                      Contact Us
                    </button>
                  </div>
                </form>
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
