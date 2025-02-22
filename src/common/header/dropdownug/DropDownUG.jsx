import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGenresThunk, fetchPopularContentThunk, searchMulti } from '../../../store/modules/getThunk';
import { searchActions } from '../../../store/modules/searchSlice';
import {
    DropdownContainer,
    SearchInput,
    SearchResultsContainer,
    CategorySection,
    ResultsGrid,
    ResultItem,
    LoadingText,
    ActionText,
} from './style';
import NoSearchResults from './NoSearchResults';

const Dropdown = ({ onClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const { searchResults, status } = useSelector((state) => state.searchR);
    const { popularContent } = useSelector((state) => state.popularR);
    const { genres } = useSelector((state) => state.genreR);

    // 초기 데이터 로드
    useEffect(() => {
        dispatch(fetchPopularContentThunk());
        dispatch(fetchGenresThunk());
    }, [dispatch]);

    // 검색 결과 카테고리별 분류
    const categorizedResults = {
        movie: searchResults.filter((item) => item.mediaType === 'movie').slice(0, 10),
        tv: searchResults.filter((item) => item.mediaType === 'tv').slice(0, 10),
        person: searchResults.filter((item) => item.mediaType === 'person').slice(0, 10),
    };

    // 검색어 입력 처리
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim()) {
            dispatch(searchActions.setQuery(value));
            dispatch(searchMulti({ query: value, page: 1 }));
        }
    };

    // 검색 결과 항목 클릭 처리
    const handleItemClick = (id, mediaType) => {
        onClose();
        switch (mediaType) {
            case 'movie':
                navigate(`/detail/movie/${id}`);
                break;
            case 'tv':
                navigate(`/detail/series/${id}`);
                break;
            case 'person':
                navigate('/contents'); // 임시 경로
                break;
            default:
                navigate(`/detail/${id}`);
        }
    };

    // 인기 검색어 섹션 렌더링
    const renderPopularContent = () => (
        <div className='left-section'>
            <h3>실시간 인기 검색어</h3>
            <ul>
                {status === 'loading' ? (
                    <div>Loading...</div>
                ) : status === 'failed' ? (
                    <div>Error: {error || 'Something went wrong'}</div>
                ) : (
                    popularContent.map((content, index) => (
                        <li key={content.id}>
                            <span className='rank-number'>{index + 1}</span>
                            {content.title}
                        </li>
                    ))
                )}
            </ul>
            <small>2025.01.22 오후 07:19 기준</small>
        </div>
    );

    // 최근 검색어와 장르 섹션 렌더링
    const renderRightSection = () => (
        <div className='right-section'>
            <div className='section'>
                <h3>
                    최근 검색어 <ActionText>모두 지우기</ActionText>
                </h3>
                <p>최근 검색한 내역이 없습니다.</p>
            </div>
            <div className='section'>
                <h3>
                    장르 바로가기 <ActionText>더보기</ActionText>
                </h3>
                <div className='keywords'>
                    {genres.map((item) => (
                        <span key={item.id}># {item.name}</span>
                    ))}
                </div>
            </div>
        </div>
    );

    // 카테고리별 검색 결과 렌더링
    const renderCategoryResults = (items, title, mediaType) => {
        if (items.length === 0) return null;

        return (
            <CategorySection>
                <ResultsGrid>
                    <h3>{title}</h3>
                    {items.map((item) => (
                        <ResultItem key={item.id} onClick={() => handleItemClick(item.id, mediaType)}>
                            <img
                                src={
                                    item[mediaType === 'person' ? 'profile_path' : 'poster_path']
                                        ? `https://image.tmdb.org/t/p/original${
                                              item[mediaType === 'person' ? 'profile_path' : 'poster_path']
                                          }`
                                        : '/path-to-placeholder-image.jpg'
                                }
                                alt={item.title || item.name}
                            />
                            <p>{item.title || item.name}</p>
                        </ResultItem>
                    ))}
                </ResultsGrid>
            </CategorySection>
        );
    };

    // 검색 결과 컨테이너 렌더링
    const renderSearchResults = () => {
        if (status === 'loading') {
            return <LoadingText>검색중...</LoadingText>;
        }

        if (searchResults.length === 0) {
            return <NoSearchResults searchTerm={searchTerm} />;
        }

        return (
            <>
                {renderCategoryResults(categorizedResults.tv, '시리즈', 'tv')}
                {renderCategoryResults(categorizedResults.movie, '영화', 'movie')}
                {renderCategoryResults(categorizedResults.person, '인물', 'person')}
            </>
        );
    };

    return (
        <DropdownContainer>
            <SearchInput type='text' placeholder='제목, 인물 검색' value={searchTerm} onChange={handleSearch} />

            {!searchTerm ? (
                <div className='content-wrapper'>
                    {renderPopularContent()}
                    {renderRightSection()}
                </div>
            ) : (
                <SearchResultsContainer>{renderSearchResults()}</SearchResultsContainer>
            )}
        </DropdownContainer>
    );
};

export default Dropdown;
