export const openSuccessModal = () => {
    const modal = document.getElementById("success_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  