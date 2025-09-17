"use client";

import { TailSpin } from "react-loader-spinner";
import spinnerStyles from "@/scss/module/spinner.module.scss";

export default function SpinnerComponent() {
  return <div className={spinnerStyles.spinner}><TailSpin color="#dfdfdfcb" height={80} width={80} /></div>;
}
