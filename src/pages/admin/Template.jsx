import { useLocation } from "react-router-dom";
import EmailTemplate1 from "../../components/admin/EmailTemplate1";
import EmailTemplate2 from "../../components/admin/EmailTemplate2";

function Template() {
  const location = useLocation();
  return (
    <div className="h-[90vh] mt-[10vh] lg:mt-[12vh] lg:h-[88vh]">
      {location.pathname === "/admin-template-1" ? (
        <EmailTemplate1 />
      ) : (
        <EmailTemplate2 />
      )}
    </div>
  );
}

export default Template;
