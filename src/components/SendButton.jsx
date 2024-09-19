// SendButton.jsx
import { Loader2 } from 'lucide-react'; // Import Loader2 from Lucide React

const SendButton = ({ onSubmit, loading }) => {
  return (
    <button
      onClick={onSubmit}
      className="p-2 bg-black-500 text-white rounded-lg flex items-center justify-center"
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="animate-spin" size={24} /> // Display loader when loading
      ) : (
        'Send Code'
      )}
    </button>
  );
};

export default SendButton;
