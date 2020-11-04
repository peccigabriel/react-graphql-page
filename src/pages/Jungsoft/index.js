import React, { useEffect, useState } from 'react';
import Background from '../../assets/bg1.png';
import { ReactComponent as KitchenIcon } from '../../assets/kitchen-tools.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PLANS } from '../../graphql/plans.queries';
import { CREATE_SUBSCRIBE } from '../../graphql/subscribe.mutation';
import Swal from 'sweetalert2';

import './jungsoft.scss';

const JungsoftPage = () => {
  const [receiverData, setReceiverData] = useState({
    id: null,
    price: 0,
  });

  const [dataOn, setDataOn] = useState({
    numberOfPeople: 3,
    weeklyRecipes: 3,
  });

  const { data } = useQuery(GET_PLANS);
  const listPlans = data?.listPlans;

  const [subscribeToPlan] = useMutation(CREATE_SUBSCRIBE);

  useEffect(() => {
    if (listPlans) {
      listPlans.forEach((plan) => {
        if (
          plan.numberOfPeople === dataOn.numberOfPeople &&
          plan.weeklyRecipes === dataOn.weeklyRecipes
        ) {
          setReceiverData({
            id: plan.id,
            price: plan.price,
          });
        }
      });
    }
  }, [dataOn, listPlans]);

  function handleSubmit(e) {
    e.preventDefault();
    if (receiverData.id) {
      subscribeToPlan({
        variables: {
          id: receiverData.id
        },
      })
        .then((res) =>
          Swal.fire({
            icon: 'success',
            title: 'Parabéns, você é um assinante :)',
            text: `Agora você assina o plano ${res?.data?.subscribeToPlan?.name}, por apenas R$ ${res?.data?.subscribeToPlan?.price} mensais`,
          }),
        )
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Desculpe :(',
            text: `Plano não disponível.`,
          });
        });
    }
  }

  return (
    <div className="woodspoon">
      <h2 className="woodspoon__titleMain">
        Configure o plano que
        <br />
        <span className="woodspoon__titleMain--bold">
          melhor encaixa na sua rotina.
        </span>
      </h2>
      <div className="woodspoon__container">
        <img src={Background} alt="woodspoon" />
        <div className="woodspoon__plans">
          <h3 className="woodspoon__title">
            Gostou e ainda não é assinante?
            <br />
            Escolha já um plano semanal!
          </h3>
          <div className="woodspoon__details">
            <div className="woodspoon__selectplan">
              <div className="woodspoon__user-with-svg">
                <UserIcon />
                <span>
                  Receita para <br /> quantas pessoas?
                </span>
              </div>
              <div className="woodspoon__button">
                <button
                  className={
                    dataOn.numberOfPeople === 3
                      ? 'woodspoon__button--active'
                      : 'woodspoon__button--normal'
                  }
                  onClick={(e) =>
                    setDataOn({
                      ...dataOn,
                      numberOfPeople: parseInt(e.target.innerText),
                    })
                  }
                >
                  3
                </button>
                <button
                  className={
                    dataOn.numberOfPeople === 4
                      ? 'woodspoon__button--active'
                      : 'woodspoon__button--normal'
                  }
                  onClick={(e) =>
                    setDataOn({
                      ...dataOn,
                      numberOfPeople: parseInt(e.target.innerText),
                    })
                  }
                >
                  4
                </button>
              </div>
            </div>
            <div className="woodspoon__selectplan">
              <div className="woodspoon__kitchen-with-svg">
                <KitchenIcon />
                <span>Quantas receitas por semana?</span>
              </div>
              <div className="woodspoon__button">
                <button
                  className={
                    dataOn.weeklyRecipes === 3
                      ? 'woodspoon__button--active'
                      : 'woodspoon__button--normal'
                  }
                  onClick={(e) =>
                    setDataOn({
                      ...dataOn,
                      weeklyRecipes: parseInt(e.target.innerText),
                    })
                  }
                >
                  3
                </button>
                <button
                  className={
                    dataOn.weeklyRecipes === 4
                      ? 'woodspoon__button--active'
                      : 'woodspoon__button--normal'
                  }
                  onClick={(e) =>
                    setDataOn({
                      ...dataOn,
                      weeklyRecipes: parseInt(e.target.innerText),
                    })
                  }
                >
                  4
                </button>
                <button
                  className={
                    dataOn.weeklyRecipes === 5
                      ? 'woodspoon__button--active'
                      : 'woodspoon__button--normal'
                  }
                  onClick={(e) =>
                    setDataOn({
                      ...dataOn,
                      weeklyRecipes: parseInt(e.target.innerText),
                    })
                  }
                >
                  5
                </button>
              </div>
            </div>
          </div>
          <div className="woodspoon__pricesubscribe">
            <div>
              <p>Preço do kit por semana</p>
              <span>
                <text className="woodspoon__pricesubscribe--currenty">R$ </text>
                {receiverData.price}
              </span>
            </div>
            <div>
              <button
                onClick={(e) => handleSubmit(e)}
                className="woodspoon__button--subscribe"
              >
                Quero assinar agora!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JungsoftPage;
