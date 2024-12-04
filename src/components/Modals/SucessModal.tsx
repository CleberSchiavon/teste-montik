import React, { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContext";
import { useLayout } from "../../contexts/LayoutContext";
import SuccessIcon from "../../assets/success.svg";

export default function SuccessModal() {
  const { selectedProduct } = useProduct();
  const { successModal } = useLayout();
  const { selectedVariant } = selectedProduct;

  useEffect(() => {
    if (successModal.open) {
      setTimeout(() => {
        window.location.href = successModal.redirect_url;
      }, 5000);
    }
  }, [successModal.open]);
  return (
    <dialog id="success_modal" className="modal">
      <div className="modal-box">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">
            Parabéns! Seu item foi adicionado com sucesso! :)
          </h2>
          <img src={SuccessIcon} alt="Sucesso" className="w-20 h-20 mx-auto" />
          <h3 className="font-bold text-lg">
            Nome do Produto: {selectedProduct?.product?.title}
          </h3>
          <h3 className="font-bold text-lg">
            Preço do Produto: R$ {Number(selectedVariant?.price)}
          </h3>
          <h4>
            Você vai ser redirecionado para a página de compra em 5 segundos
          </h4>
          <p className="container rounded-sm bg-gray-600 text-black">
            {successModal.redirect_url}
          </p>
        </div>
      </div>
    </dialog>
  );
}
