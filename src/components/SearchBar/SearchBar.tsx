import styles from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {

        const handleSubmit = (formData: FormData) => {
        
            const request = formData.get('query') as string;
            
    if (!request.trim()) {
      toast.error('Please enter your search query.');
      return;
    }
            onSubmit(request);
            
            console.log(request);
            
       
    };
   
 