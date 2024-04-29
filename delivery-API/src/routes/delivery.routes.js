import { Router } from "express";
import DeliveryController from "../controllers/Delivery.controller.js";

export const router = Router();

router.post("/novopedido", DeliveryController.createDemand); // OK
router.get("/", DeliveryController.getDemandsList); //OK
router.get("/:id", DeliveryController.getDemandItem); //OK
router.get("/valor", DeliveryController.getInvoicing)
router.delete("/remover/:id", DeliveryController.removeDemandList); //OK
router.put("/atualizarpedido", DeliveryController.updateDemand); 
router.patch("/atualizarstatus", DeliveryController.updateStatusDemand); //OK
