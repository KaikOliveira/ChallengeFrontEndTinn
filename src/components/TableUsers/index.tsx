import React from 'react';

import { User } from 'interfaces/teste-front';

import { ItemTable } from './ItemTable';
import * as S from './styles';

interface TableUsersProps {
  users: User[];
  refetchUsers: () => Promise<void>;
}

export const TableUsers = ({ users, refetchUsers }: TableUsersProps) => {
  return (
    <S.Container>
      <S.TableContainer>
        <thead>
          <tr>
            <th>
              <div>Nome</div>
            </th>

            <th>
              <div>CPF</div>
            </th>
            <th>
              <div>Celular</div>
            </th>
            <th>
              <div>E-mail</div>
            </th>
            <th>
              <div>Deletar</div>
            </th>
          </tr>
        </thead>

        <tbody>
          {users?.length > 0 ? (
            users.map((item) => (
              <ItemTable
                key={item.id}
                item={item}
                refetchUsers={refetchUsers}
              />
            ))
          ) : (
            <S.NotFound>
              <p>Nenhum usuario encontrado</p>
            </S.NotFound>
          )}
        </tbody>
      </S.TableContainer>
    </S.Container>
  );
};
