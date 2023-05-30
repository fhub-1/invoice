import { Toaster } from "react-hot-toast";

interface ToastBarProps {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    reverseOrder: boolean;
  }
  
  function ToastBar(props: ToastBarProps) {
    // Component logic goes here
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
  }
  
  export default ToastBar;
  