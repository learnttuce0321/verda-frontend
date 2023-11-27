"use client";

import { cache } from "react";
import { QueryClient } from "@tanstack/react-query";

const getQueryclient = cache(() => new QueryClient());
export default getQueryclient