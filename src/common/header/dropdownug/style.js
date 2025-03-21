import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const ClearButton = styled.button`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    color: var(--gray-100);

    &:hover {
        color: var(--gray-200);
    }
`;
// 기존 스타일 컴포넌트들...
export const ActionText = styled.span`
    font-size: 0.875rem;
    font-weight: bold;
    color: #7e7e7e;
    cursor: pointer;
    transition: color 0.3s ease;
    line-height: 100%;
    &:hover {
        color: #1ee0b6;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 1rem;
    font-size: 1.063rem;
    background-color: #191919;
    border: none;
    border-bottom: 0.1875rem solid #1ee0b6;
    color: #fff;
    outline: none;

    &::placeholder {
        color: #57585a;
    }
`;

export const DropdownContainer = styled.div`
    position: absolute;
    top: 6.25rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100vh; /* 화면의 세로 크기 전체를 채우기 */
    background-color: #191919;
    padding: 5rem 9.5rem 8.125rem 11.375rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    z-index: 9999;
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    .content-wrapper {
        flex: 1;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
        padding-top: 4.375rem;

        .left-section {
            display: flex;
            flex-direction: column;

            h3 {
                font-size: 1.063rem;
                font-weight: 800;
                margin-bottom: 1rem;
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    font-size: 0.938rem;
                    line-height: 1.5rem;
                    color: #939598;
                    margin-bottom: 0.5rem;
                    font-weight: 100;
                    cursor: pointer;
                    transition: color 0.3s ease;
                    &:hover {
                        color: white;
                    }
                }

                .rank-number {
                    color: #07ffe6;
                    margin-right: 0.5rem;
                }
            }

            small {
                display: block;
                margin-top: 1rem;
                font-size: 0.8rem;
                font-weight: 100;
                color: #ccc;
            }
        }

        .right-section {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .right-section .section:last-child {
            margin-top: 11.875rem;
        }

        .section {
            h3 {
                font-size: 1.063rem;
                font-weight: 800;
                margin-bottom: 1rem;
                line-height: 1.5;
                color: #ffffff;
            }

            p {
                font-size: 0.95rem;
                color: #ccc;
            }

            .keywords {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;

                span {
                    background-color: #191919;
                    border: 1px solid #07ffe6;
                    padding: 0.5rem 1rem;
                    border-radius: 1.25rem;
                    font-size: 0.75rem;
                    color: #fff;
                    cursor: pointer;
                    transition: background-color 0.3s;

                    &:hover {
                        background-color: #07ffe6;
                        color: #191919;
                    }
                }
            }
        }
    }
`;

// 새로운 검색 결과 관련 스타일 컴포넌트들
export const SearchResultsContainer = styled.div`
    padding: 6rem 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    min-height: min-content;
    width: 100%;
`;

export const CategorySection = styled.div`
    margin-bottom: 2rem;
`;

export const ResultsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    width: 100%;

    h3 {
        flex: 0 0 calc((100% - (1.5rem * 5)) / 6); // 첫 줄 6개 (h3 포함)
        font-size: 3.8rem;
        font-weight: 800;
        color: #ffffff;
        margin: 0;
    }

    & > div {
        flex: 0 0 calc((100% - (1.5rem * 5)) / 6); // 6개 아이템
        max-width: calc((100% - (1.5rem * 5)) / 6);
    }
`;

export const ResultItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.5rem;
        margin-bottom: 0.75rem;
    }

    p {
        text-align: center;
        font-size: 0.875rem;
        color: #ffffff;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const LoadingText = styled.div`
    text-align: center;
    padding: 2rem;
    color: #ffffff;
    font-size: 1rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 1rem;
    background-color: #121212;
    color: #ffffff;
`;

export const Title = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 0.5rem;

    span {
        color: #9ca3af;
    }
`;

export const Description = styled.p`
    color: #9ca3af;
    text-align: center;
    max-width: 28rem;
`;

export const TipsContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
`;

export const TipsTitle = styled.p`
    font-size: 0.875rem;
    color: #6b7280;
`;

export const TipsList = styled.ul`
    font-size: 0.875rem;
    color: #9ca3af;
    list-style-type: disc;
    /* padding-left: 1.25rem; */

    li {
        margin-bottom: 0.25rem;
    }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    gap: ${(props) => props.$gap};
    padding: ${(props) => (props.$padding ? props.$padding : '')};
    position: ${(props) => props.$position};
    width: ${(props) => props.$width || 'auto'};
    border-top: ${(props) => props.$borderTop};
    white-space: ${(props) => props.$whiteSpace};
    font-size: ${(props) => props.$fontSize};
`;
