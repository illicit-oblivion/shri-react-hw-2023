'use client';

import DropdownIcon from "@app/ui/icons/accordion.svg";
import {FC, ReactNode, useEffect, useRef, useState} from 'react';
import styles from './Dropdown.module.css';
import {createPortal} from 'react-dom';

type Option = {
  id?: string;
  name: string;
};

interface Props {
  label: string;
  defaultText: string;
  options: Option[];
  onChange: (value: string) => void;
}

const DropdownContainer = ({ children }: { children: ReactNode }) => {
  const portalContainer = document.getElementById('portal');
  if (!portalContainer) return null;
  return createPortal(children, portalContainer);
};

export const Dropdown: FC<Props> = ({
  label,
  defaultText,
  options,
  onChange,
}: Props) => {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => onChange(selectedOption), [selectedOption, onChange]);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    const handleClick = () => setIsOpen(false);

    if (isOpen) {
      document.addEventListener('scroll', handleScroll);
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  const handleOpenList = () => {
    setIsOpen(true);
  };

  const handleOptionSelect = (option: { id?: string; name: string }) => {
    setSelectedOption(option.id || option.name);
    setSelectedValue(option.name);
  };

  return (
    <div className={styles['dropdown']} ref={selectRef}>
      <label className={styles['label']}>{label}</label>
      <div
        className={
          styles['selector'] +
          (isOpen ? ' ' + styles['selectorActive'] : '') +
          (selectedOption === ''
            ? ' ' + styles['selectorDefault']
            : '')
        }
        onClick={handleOpenList}
      >
        {selectedValue !== '' ? selectedValue : defaultText}

        <DropdownIcon
          width={20}
          height={20}
          className={
            styles['icon'] +
            (isOpen ? ' ' + styles['iconActive'] : '')
          }
        />
      </div>
      {isOpen && selectRef.current && (
        <DropdownContainer>
          <ul
            className={styles['options']}
            style={{
              top:
                selectRef.current?.getBoundingClientRect().bottom ?? 0,
              left: selectRef.current?.getBoundingClientRect().left ?? 0,
              width:
                selectRef.current?.getBoundingClientRect().width ?? 0,
            }}
          >
            <li
              key="default"
              className={styles['option']}
              onClick={() => {
                handleOptionSelect({ name: '' });
                setIsOpen(false);
              }}
            >
              Все
            </li>
            {options.map((option) => (
              <li
                key={option.id || option.name}
                className={styles['option']}
                onClick={() => {
                  handleOptionSelect(option);
                  setIsOpen(false);
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </DropdownContainer>
      )}
    </div>
  );
};
