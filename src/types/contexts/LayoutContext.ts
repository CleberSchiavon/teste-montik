export type SuccessModal = {
  open: boolean;
  redirect_url: string;
};

export interface LayoutContextType {
  successModal: SuccessModal;
  setSuccessModal: React.Dispatch<React.SetStateAction<SuccessModal>>;
}
