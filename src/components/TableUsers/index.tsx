import React from 'react';

import { User } from 'interfaces/teste-front';
import { maskCpf } from 'utils/maskCpf';
import { maskPhoneNumber } from 'utils/maskPhoneNumber';

import * as S from './styles';

interface TableUsersProps {
  users: User[];
}

export const TableUsers = ({ users }: TableUsersProps) => {
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
          </tr>
        </thead>

        <tbody>
          {users?.length > 0 ? (
            users.map((item) => (
              <tr key={item.cpf}>
                <td>
                  <div>
                    <span>{item.name}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{item?.cpf && maskCpf(item.cpf)}</span>
                  </div>
                </td>

                <td>
                  <div>
                    <span>{item?.phone && maskPhoneNumber(item.phone)}</span>
                  </div>
                </td>

                <td>
                  <div>
                    <span>{item.email}</span>
                  </div>
                </td>
              </tr>
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
