## react-router-dom v6 변경 된 점 

1. Switch -> Routes
    - 기존 코드 
    ```javascript
    <BrowserRouter>
        <Switch>
            <Route exact path="/"  component={Login} />
            <Redirect  path ="*" to ="/" />
        </Switch>
    </BrowserRouter>
    ```
    - 변경 된 코드 
    ```javascript
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TestPage />}/>
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
    </BrowserRouter>
    ```
 2. Redirect -> Navigate 
    - 코드는 위에 코드 참고 
    - redirect의 경우 기본적으로 replace를 사용하고 prop을 통해 push로 변경 가능
    - Navigate의 경우 기본적으로 push를 사용하고 prop을 통해 replace로 변경 가능

3. 다른 변경사항은 밑에 참고 사이트 참조 

참고 사이트 https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6
