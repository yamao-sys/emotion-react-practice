# emotion-react-practice
Emotionのキャッチアップ用リポジトリ

## メリット
- Styled Componentsと同様の使いやすさ
	- コンポーネント内にstyleを閉じることができる
	- propsを使って動的にスタイリングしやすい
	- 共通値はthemeで簡単に管理できる

## デメリット
- バンドルサイズは大きくなる
- ゼロランタイムと比べるとパフォーマンスは劣ってしまう
	- が、導入している事例も多いのでそこまでボトルネックではなさそう
	- パフォーマンスはどちらかというと、バックエンド側にあることも多いので
- 状態管理ベースになるので、パフォーマンス

## Styled Componentsと比べて
- Emotionの方が高パフォーマンス
	- 特にコンポーネント数が多いほど効果が実感できる
		- https://techblog.zozo.com/entry/zozotown-css-in-js
- 書きやすさはStyled Componentsと遜色なし

## 導入にあたる基準
- 開発のしやすさ
	- 簡単に書ける
	- ネストセレクタや擬似クラス、メディアクエリが使える
- 情報の豊富さ
- メンテナンスが活発化
- TypeScriptとの相性

いずれもStyled Componentと同様な感じ。パフォーマンスの面でEmotionに軍配が上がる
