'use client';
import {ReactNode, useEffect, useRef, useState} from 'react';
import styles from './Dropdown.module.css';
import { createPortal } from 'react-dom';
import DropdownIcon from "@app/ui/icons/dropdown.svg";

interface DropdownProps {
  label: string;
  defaultText: string;
  options: {
    id?: string;
    name: string;
  }[];
  onChange: (value: string) => void;
}

const DropdownContainer = ({ children }: { children: ReactNode }) => {
  const portalContainer = document.getElementById('portal');
  if (!portalContainer) return null;
  return createPortal(children, portalContainer);
};

export default function Dropdown({
  label,
  defaultText,
  options,
  onChange,
}: DropdownProps) {
  const dropdownSelectRef = useRef<HTMLDivElement>(null);
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
    <div className={styles['dropdown']} ref={dropdownSelectRef}>
      <label className={styles['dropdown__label']}>{label}</label>
      <div
        className={
          styles['dropdown__selector'] +
          (isOpen ? ' ' + styles['dropdown__selector_active'] : '') +
          (selectedOption === ''
            ? ' ' + styles['dropdown__selector_default']
            : '')
        }
        onClick={handleOpenList}
      >
        {selectedValue !== '' ? selectedValue : defaultText}

        <DropdownIcon
          className={
            styles['dropdown__selector-icon'] +
            (isOpen ? ' ' + styles['dropdown__selector-icon_active'] : '')
          }
        />
      </div>
      {isOpen && dropdownSelectRef.current && (
        <DropdownContainer>
          <ul
            className={styles['dropdown__options']}
            style={{
              top:
                dropdownSelectRef.current.getBoundingClientRect().bottom ?? 0,
              left: dropdownSelectRef.current.getBoundingClientRect().left ?? 0,
              width:
                dropdownSelectRef.current.getBoundingClientRect().width ?? 0,
            }}
          >
            <li
              key="default"
              className={styles['dropdown__option']}
              onClick={() => {
                handleOptionSelect({ name: '' });
                setIsOpen(false);
              }}
            >
              -
            </li>
            {options.map((option) => (
              <li
                key={option.id || option.name}
                className={styles['dropdown__option']}
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
}
