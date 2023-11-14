"use client"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export default function suscripcion() {
    return (
        <div className="bg-gray-100 p-8 max-w-lg mx-auto rounded-lg">
        <div className=" p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-gray-500 text-center mb-4">
            El valor de inscripción al torneo es de 100$
          </h2>
          <PayPalScriptProvider>
            <PayPalButtons
              style={{
                color: "blue",
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>

    );
}


