import React from 'react';
import { toast } from 'react-toastify';

import { Button } from 'components/Button';
import { CustomToast } from 'components/CustomTostfy';
import { User } from 'interfaces/teste-front';
import { setCookie, parseCookies } from 'nookies';
import { maskCpf } from 'utils/maskCpf';
import { maskPhoneNumber } from 'utils/maskPhoneNumber';

interface ItemTableProps {
  item: User;
  refetchUsers: () => Promise<void>;
}

const BaseItemTable = ({ item, refetchUsers }: ItemTableProps) => {
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleDeleteUser() {
    try {
      setIsLoading(true);

      const { '@tinnova:users': usersInCookie } = parseCookies();

      const arrUsers = await JSON.parse(usersInCookie);
      const filt = arrUsers.filter((e, i, r) => {
        if (e.id === item.id) {
          return i === r.indexOf(e);
        }
      });

      arrUsers.splice(arrUsers.indexOf(filt[0]), 1);

      setCookie(undefined, '@tinnova:users', JSON.stringify(arrUsers), {
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });

      setTimeout(async () => {
        await refetchUsers();

        toast(
          <CustomToast
            status="success"
            title="Sucesso!"
            message="Usuário deletado com sucesso."
          />
        );
      }, 4000);
    } catch (err) {
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message="Algo de errado aconteceu, tente novamente."
        />
      );
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }

  return (
    <tr key={item.id}>
      <td>
        <div className="descriptionMobile">
          <span>Nome:</span>
        </div>
        <div>
          <span>{item.name}</span>
        </div>
      </td>
      <td>
        <div className="descriptionMobile">
          <span>CPF:</span>
        </div>
        <div>
          <span>{item?.cpf && maskCpf(item.cpf)}</span>
        </div>
      </td>

      <td>
        <div className="descriptionMobile">
          <span>Telefone:</span>
        </div>
        <div>
          <span>{item?.phone && maskPhoneNumber(item.phone)}</span>
        </div>
      </td>

      <td>
        <div className="descriptionMobile">
          <span>E-mail:</span>
        </div>
        <div>
          <span>{item.email}</span>
        </div>
      </td>

      <td>
        <div className="descriptionMobile">
          <span>Deletar:</span>
        </div>
        <div>
          <Button
            type="button"
            variant="RED"
            onClick={() => handleDeleteUser()}
            isLoading={isLoading}
          >
            Deletar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export const ItemTable = React.memo(BaseItemTable, (prevProps, nextProps) => {
  if (prevProps.item.id === nextProps.item.id) {
    return true;
  }
});
