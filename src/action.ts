import axios from "axios";
import { useNavigate } from "react-router-dom";

const search = (res: any) => {
  return {
    type: "search",
    payload: res,
  };
};

const useSearchAsync = () => {
  const navigate = useNavigate();
  const searchAsync = (value: any) => {
    const searchContent = value.trim().replace(/\s+/g, '+');
    
    return async (dispatch: any) => {
      navigate(`search/result/${searchContent}`);
      const res = await axios.post(
        "http://3.141.23.218:5000/interview/keyword_search",
        {
          login_token: "INTERVIEW_SIMPLY2021",
          search_phrase: "best shoes",
        }
      );
      const { product_trends } = res?.data?.data;
      dispatch(search(product_trends));
    };
  };
  return {
    searchAsync
  }
};

export { useSearchAsync };
