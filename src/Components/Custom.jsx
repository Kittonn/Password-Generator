import React from "react";
import { Switch } from "@headlessui/react";
const Custom = ({
  enabledUpper,
  setEnabledUpper,
  enabledLower,
  setEnabledLower,
  enabledNum,
  setEnabledNum,
  enabledSym,
  setEnabledSym,
}) => {
  return (
    <div>
      <div>
        <p>Include Uppercase</p>
        <Switch
          checked={enabledUpper}
          onChange={setEnabledUpper}
          className={`${
            enabledUpper ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabledUpper ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
      <div>
        <p>Include Lowercase</p>
        <Switch
          checked={enabledLower}
          onChange={setEnabledLower}
          className={`${
            enabledLower ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabledLower ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
      <div>
        <p>Include Numbers</p>
        <Switch
          checked={enabledNum}
          onChange={setEnabledNum}
          className={`${
            enabledNum ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabledNum ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
      <div>
        <p>Include Symbols</p>
        <Switch
          checked={enabledSym}
          onChange={setEnabledSym}
          className={`${
            enabledSym ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabledSym ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Custom;
