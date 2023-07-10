import React from "react";
import Loading from "../../components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { commerce } from "../../commerce";
// import { getToken } from "../../store/actions/login";

const ExchangeToken = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  useEffect(() => {
    commerce.customer.getToken(token).then(() => navigate("/"));
  }, [token]);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default ExchangeToken;
