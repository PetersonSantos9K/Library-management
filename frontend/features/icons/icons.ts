import {
  Book,
  FileText,
  Share2,
  Lock,
  Users,
  Eye,
  ArrowRight,
 
} from "lucide-react";

export default function iconsFeatures(){

  const icons = {
    book: Book,
    pdf: FileText,
    share: Share2,
    lock: Lock,
    users: Users,
    eye: Eye,
    arrow: ArrowRight
  };
  return {icons};
}

